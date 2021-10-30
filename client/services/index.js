import getConfig from 'next/config'
import io from 'socket.io-client'
import AuthService from './AuthService'
import UserService from './UserService'
import UserInvitationService from './UserInvitationService'
import ApplicationService from './ApplicationService'
import TransactionService from './TransactionService'
import UserGateway from '../gateways/UserGateway'
import UserInvitationGateway from '../gateways/UserInvitationGateway'
import AuthGateway from '../gateways/AuthGateway'
import RoleGateway from '../gateways/RoleGateway'
import ApplicationGateway from '../gateways/ApplicationGateway'
import StorageGateway from '../gateways/StorageGateway'
import PubsubGateway from '../gateways/PubsubGateway'
import MessageGateway from '../gateways/MessageGateway'
import NewsGateway from '../gateways/NewsGateway'
import TransactionGateway from '../gateways/TransactionGateway'
import TransactionActivityGateway from '../gateways/TransactionActivityGateway'
import TransactionInvitationGateway from '../gateways/TransactionInvitationGateway'
import TransactionPartyGateway from '../gateways/TransactionPartyGateway'
import DocumentGateway from '../gateways/DocumentGateway'
import DocumentActionGateway from '../gateways/DocumentActionGateway'
import NotificationGateway from '../gateways/NotificationGateway'
import InvitationGateway from '../gateways/InvitationGateway'
import * as RestConnector from '../connectors/RestConnector'
import * as PubsubConnector from '../connectors/PubsubConnector'
import EventGateway from '../gateways/EventGateway'
import EventService from './EventService'
import TaskGateway from '../gateways/TaskGateway'
import TaskService from './TaskService'
import TransactionCommissionGateway from '../gateways/TransactionCommissionGateway'
import TransactionDetailGateway from '../gateways/TransactionDetailGateway'
import UserCommissionGateway from '../gateways/UserCommissionGateway'
import CommissionService from './CommissionService'
import MessageService from './MessageService'
import NewsService from './NewsService'
import NotificationService from './NotificationService'

const { publicRuntimeConfig } = getConfig()

const API_BASE_URL = `${publicRuntimeConfig.BASE_URL}/api`
const restConnector = RestConnector.create({ baseUrl: API_BASE_URL })
const socketConnector = io(publicRuntimeConfig.BASE_URL)
const pubsubConnector = PubsubConnector.create()

const authGateway = new AuthGateway({ restConnector })
const userGateway = new UserGateway({ restConnector })
const roleGateway = new RoleGateway({ restConnector })
const storageGateway = new StorageGateway({ restConnector })
const applicationGateway = new ApplicationGateway({ restConnector })
const pubsubGateway = new PubsubGateway({ pubsubConnector })
const transactionGateway = new TransactionGateway({ restConnector })
const transactionActivityGateway = new TransactionActivityGateway({
  restConnector
})
const transactionInvitationGateway = new TransactionInvitationGateway({
  restConnector
})
const transactionPartyGateway = new TransactionPartyGateway({ restConnector })
const documentGateway = new DocumentGateway({ restConnector })
const documentActionGateway = new DocumentActionGateway({
  restConnector,
  socketConnector
})
const eventGateway = new EventGateway({ restConnector })
const taskGateway = new TaskGateway({ restConnector })
const messageGateway = new MessageGateway({ restConnector, socketConnector })
const newsGateway = new NewsGateway({ restConnector })
const notificationGateway = new NotificationGateway({
  restConnector,
  socketConnector
})
const invitationGateway = new InvitationGateway({
  restConnector
})
const userInvitationGateway = new UserInvitationGateway({ restConnector })

const transactionCommissionGateway = new TransactionCommissionGateway({
  restConnector
})
const userCommissionGateway = new UserCommissionGateway({
  restConnector
})
const transactionDetailGateway = new TransactionDetailGateway({
  restConnector
})

export const authService = new AuthService({
  pubsubGateway,
  authGateway,
  userGateway,
  roleGateway,
  storageGateway
})
export const userService = new UserService({
  pubsubGateway,
  userGateway,
  roleGateway,
  invitationGateway
})
export const applicationService = new ApplicationService({
  pubsubGateway,
  applicationGateway
})
export const transactionService = new TransactionService({
  transactionGateway,
  transactionActivityGateway,
  transactionInvitationGateway,
  transactionPartyGateway,
  documentGateway,
  documentActionGateway,
  transactionDetailGateway,
  userGateway
})
export const eventService = new EventService({
  eventGateway
})
export const taskService = new TaskService({
  taskGateway
})
export const messageService = new MessageService({ messageGateway })
export const newsService = new NewsService({ newsGateway })
export const userInvitationService = new UserInvitationService({
  userInvitationGateway
})
export const notificationService = new NotificationService({
  notificationGateway
})
export const commissionService = new CommissionService({
  transactionCommissionGateway,
  userCommissionGateway
})
