import { NotificationType } from '../../common/models/Notification'

export default News => {
  News.observe('after save', async ctx => {
    const { Notification, Role, RoleMapping } = News.app.models
    if (ctx.isNewInstance) {
      const news = ctx.instance
      if (news.status === true) {
        const publicDate = Date.now()
        const title = `${news.title}`
        const content = `${news.content}`
        const idNews = `${news.id}`
        const type = `${news.newsType}`
        const roleUser = await Role.find({
          where: {
            or: [{ name: 'agent' }, { name: 'coordinator' }]
          }
        })
        const roleId = await roleUser.map(x => x.id)
        const roleMap = await RoleMapping.find({
          where: {
            roleId: { inq: roleId }
          }
        })
        const principalId = await roleMap.map(x => x.principalId)
        if (principalId && principalId.length > 0) {
          for (let id of principalId) {
            await Notification.createNew({
              userId: id,
              creatorId: news.creatorId,
              type: NotificationType.NEW_NEWS,
              data: { title, internalLink: idNews, content, type }
            })
          }
        }
        await News.update({ id: news.id }, { publicDate: publicDate })
      }
    }
  })
  News.afterRemote('prototype.patchAttributes', async ctx => {
    const { Notification, Role, RoleMapping } = News.app.models
    if (ctx.instance) {
      const news = ctx.instance
      const listNot = await Notification.find({
        where: { type: NotificationType.NEW_NEWS }
      })
      const ListNewsDelete = listNot.filter(x => x.data.internalLink == news.id)
      const title = `${news.title}`
      const content = `${news.content}`
      const idNews = `${news.id}`
      const type = `${news.newsType}`
      const publicDate = Date.now()
      const roleUser = await Role.find({
        where: {
          or: [{ name: 'agent' }, { name: 'coordinator' }]
        }
      })
      const roleId = await roleUser.map(x => x.id)
      const roleMap = await RoleMapping.find({
        where: {
          roleId: { inq: roleId }
        }
      })
      const principalId = await roleMap.map(x => x.principalId)
      if (ListNewsDelete.length > 0) {
        if (news.status === true) {
          if (principalId && principalId.length > 0) {
            ListNewsDelete.map(async (data, index) => {
              if (index < ListNewsDelete.length) {
                let id = data.id
                await Notification.update(
                  { id: id },
                  { data: { content, internalLink: idNews, title, type } }
                )
              }
            })
          }
        } else {
          ListNewsDelete.map(async (data, index) => {
            if (index < ListNewsDelete.length) {
              let id = data.id
              await Notification.remove({ id })
            }
          })
        }
      } else {
        if (news.status === true) {
          if (principalId && principalId.length > 0) {
            for (let id of principalId) {
              await Notification.createNew({
                userId: id,
                creatorId: news.creatorId,
                type: NotificationType.NEW_NEWS,
                data: { title, internalLink: idNews, content, type }
              })
            }
          }
          await News.update({ id: news.id }, { publicDate: publicDate })
        }
      }
      // if (news.status === true) {
      //   if (principalId && principalId.length > 0) {
      //     for (let id of principalId) {
      //       await Notification.createNew({
      //         userId: id,
      //         creatorId: news.creatorId,
      //         type: NotificationType.NEW_NEWS,
      //         data: { title, internalLink: idNews, content, type }
      //       })
      //     }
      //   }
      // } else {
      //   ListNewsDelete.map(async (data, index) => {
      //     if (index < ListNewsDelete.length) {
      //       let id = data.id
      //       await Notification.remove({ id })
      //     }
      //   })
      // }
    }
  })
  News.observe('after delete', async ctx => {
    const { Notification } = News.app.models
    const newsId = ctx.where.id
    const news = await Notification.find({
      where: { type: NotificationType.NEW_NEWS }
    })
    const ListNewsDelete = news.filter(x => x.data.internalLink == newsId)
    ListNewsDelete.map(async (data, index) => {
      if (index < ListNewsDelete.length) {
        let id = data.id
        await Notification.remove({ id })
      }
    })
  })
}
