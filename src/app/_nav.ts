export const navigation = [   
  {
    name: 'Gestión de usuarios',
    url: '/admin/users',
    icon: 'icon-user',
    badge: {
      variant: 'info',
      text: ''
    }
  }     
  ,
  {
    name: 'Listas de etiquetas',
    url: '/admin/listas',
    icon: 'icon-tag',
    badge: {
      variant: 'info',
      text: ''
    }
  } 
  ,
  {
    name: 'Gestión de información',
    url: '/admin/asignaciones',
    icon: 'icon-equalizer',  
    children: [
      {
        name: 'Copias de seguridad',
        url: '/admin/asignaciones',
        icon: 'icon-disc'
      },
      {
        name: 'Generación de información',
        url: '/admin/asignaciones',
        icon: 'icon-control-play'
      },
      {
        name: 'Carga de información',
        url: '/admin/asignaciones',
        icon: 'icon-cloud-upload'
      },
      {
        name: 'Borrado de información',
        url: '/admin/asignaciones',
        icon: 'icon-trash'
      }
    ]

  }     
   

  ,
  {
    name: 'Gestión series de tiempo',
    url: '/admin/asignaciones',
    icon: 'icon-graph',    
    children: [
      {
        name: 'Crear series básicas',
        url: '/admin/asignaciones',
        icon: 'icon-graph'
      },
      {
        name: 'Crear derivadas estadísticas',
        url: '/admin/asignaciones',
        icon: 'icon-chart'
      },
      {
        name: 'Crear derivadas calculadas',
        url: '/admin/asignaciones',
        icon: 'icon-calculator'
      },
      {
        name: 'Crear derivadas transferencia',
        url: '/admin/asignaciones',
        icon: 'icon-shuffle'
      }
      ,
      {
        name: 'Borrar series',
        url: '/admin/asignaciones',
        icon: 'icon-fire'
      }
    ]
  } 
  ,
  {
    name: 'Borrado de estaciones',
    url: '/admin/asignaciones',
    icon: 'icon-location-pin',
    badge: {
      variant: 'info',
      text: ''
    }
  }
  ,
  {
    name: 'Configuración del sistema',
    url: '/admin/asignaciones',
    icon: 'icon-settings',
    badge: {
      variant: 'info',
      text: ''
    }
  }
  
];
