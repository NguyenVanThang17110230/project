const routes = require('next-routes')()

// Pages for everyone
routes.add('/', 'Dashboard')

// Pages for guest-only (not logged in user)
routes
  .add('/login', 'LoginPage')
  .add('/signup', 'SignupPage')
  .add('/reset-password', 'ResetPasswordPage')
  .add('/reset-new-password', 'ResetNewPasswordPage')
  .add('/vendor', 'VendorsParties')

// Pages for user-only
routes
  .add('/tasks', 'Tasks')
  .add('/my-settings', 'ProfileSettingsPage')
  .add('/my-profiles', 'ProfilePage')
  .add('/contact', 'Contact')
  .add('/contact/:idUser', 'ContactDetailPage')
  .add('/my-transactions', 'MyTransactionsPage')
  .add('/my-transactions/:idTransaction', 'TransactionPartiesPage')
  .add(
    '/my-transactions/:idTransaction/parties/:idParty/files',
    'TransactionFilesPage'
  )
  .add('/message', 'MessagePage')
  .add('/calendar', 'Calendar')
  .add('/manage-agents', 'ManageAgents')
  .add('/manage-agents/:idAgent/edit', 'ManageAgents/EditManageAgents')
  .add(
    '/manage-agents/:idAgent/agent-transactions',
    'ManageAgents/AgentsTransactions'
  )

// Pages for admin-only
routes
  .add('/admin', 'admin/AdminIndexPage')
  .add('/admin/login', 'admin/AdminLoginPage')
  .add('/admin/setup', 'admin/AdminSetupPage')
  .add('/admin/my/settings', 'admin/AdminProfileSettingsPage')
  .add('/admin/users', 'admin/AdminListUserPage')
  .add('/admin/users/:id/edit', 'admin/AdminEditUserPage')
  .add('/admin/users/create', 'admin/AdminCreateUserPage')
  .add('/admin/roles', 'admin/AdminListRolePage')
  .add('/admin/configurations/email', 'admin/AdminEmailSettingsPage')
  .add('/admin/transactions', 'admin/AdminTransactionsPage')
  .add('/admin/news', '/admin/AdminListNews')

module.exports = routes
