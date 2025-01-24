import IconEnum from '@/enums/icon/iconEnum'

interface MenuItem {
  key: string
  label: string
  icon?: IconEnum
  path?: string
  tabPermission?: string
  pagePermission?: { tab: string; page: string }
  children?: MenuItem[]
  type?: string
}

export const menuItems: MenuItem[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: IconEnum.LayoutDashboard, // Updated icon
    path: '/app/dashboard',
    tabPermission: 'Dashboard',
  },
  {
    key: 'measurement',
    label: 'Medição',
    icon: IconEnum.Gauge, // Updated icon
    path: '/app/measurement',
    tabPermission: 'Medição',
  },
  {
    key: 'registers',
    label: 'Cadastro',
    icon: IconEnum.UsersRound, // Updated icon
    tabPermission: 'Cadastro',
    children: [
      {
        key: 'assets',
        label: 'Ativos',
        path: '/app/clients/assets',
        pagePermission: { tab: 'Cadastro', page: 'Ativos' },
      },
      {
        key: 'equity',
        label: 'Patrimônio Líquido Ajustado',
        path: '/app/registers/equity',
        pagePermission: {
          tab: 'Cadastro',
          page: 'Patrimônio liquído ajustado',
        },
      },
    ],
  },
  {
    key: 'contracts',
    label: 'Contratos',
    icon: IconEnum.FilePenLine, // Updated icon
    tabPermission: 'Contratos',
    children: [
      {
        key: 'cliq-ccee',
        label: 'CliqCCEE',
        path: '/app/contracts/cliq-ccee',
        pagePermission: { tab: 'Contratos', page: 'CliqCCEE' },
      },
      {
        key: 'contract-report',
        label: 'Relatório de Contratos',
        path: '/app/contracts/contract-report',
        pagePermission: { tab: 'Contratos', page: 'Relatório de Contratos' },
      },
      {
        key: 'create-contracts',
        label: 'Cadastro CliqCCEE',
        path: '/app/contracts/create-contracts',
        pagePermission: { tab: 'Contratos', page: 'Cadastro CliqCCEE' },
      },
      {
        key: 'prudential-monitoring',
        label: 'Monitoramento Prudencial',
        path: '/app/contracts/prudential-monitoring',
        pagePermission: { tab: 'Contratos', page: 'Monitoramento Prudencial' },
      },
      {
        key: 'negotiation-call',
        label: 'Chamada de Negociação',
        path: '/app/contracts/negotiation-call',
        pagePermission: { tab: 'Contratos', page: 'Chamada de Negociação' },
      },
    ],
  },
  {
    key: 'documents',
    label: 'Documentos',
    icon: IconEnum.FileText, // Updated icon
    tabPermission: 'Documentos',
    type: 'group',
    children: [
      {
        key: 'scheduled-emails',
        label: 'Envios Agendados',
        path: '/app/documents/scheduled-emails',
        pagePermission: { tab: 'Documentos', page: 'Envios Agendados' },
        // ... Other nested items if any ...
      },
    ],
  },
  {
    key: 'invoices',
    label: 'Faturas',
    icon: IconEnum.CircleDollarSign, // Updated icon
    tabPermission: 'Faturas',
    children: [
      {
        key: 'billing',
        label: 'Faturamento de Energia',
        path: '/app/invoices/billing',
        pagePermission: { tab: 'Faturas', page: 'Faturamento de energia' },
      },
      // ... Other child items ...
    ],
  },
  {
    key: 'admin',
    label: 'Administração',
    icon: IconEnum.Settings, // Updated icon
    path: '/app/administration',
    tabPermission: 'Admin',
  },
]
