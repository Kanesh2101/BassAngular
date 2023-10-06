export class MenuList{
    menus = [
        {
            id: 'HomeComponent',
            sideMenu: [{
                label:'Dashboard',
                innerMenu: [{
                    megamenu: [{
                        level1Menu: 'Main Dashboard',
                        dropMenu: [{
                            innerlabel1: 'Chart 1',
                            innerLabel2: 'Chart 2'
                        }],
                        level2Menu: 'My Research',
                    }]
                }],
            }]
        }
        ,{
            id: 'StatisticsComponent',
            sideMenu: [
                {
                label:'Procurement',
                innerMenu: [{
                    megamenu: [{
                        level1Menu: 'PI',
                        dropMenu: [
                        {
                            innerlabel: 'Chart 1'
                        },
                        {
                            innerlabel: 'Chart2'
                        }
                    ],
                        level2Menu: 'My Research',
                    }]
                }],
                
                
                
                },
                {
                label:'Project',
                innerMenu: [{
                    megamenu: [{
                        level1Menu: 'Project',
                        dropMenu: [{
                            innerlabel: 'P1'
                        }],
                    level2Menu: 'My Research',
                    }]
                }]
                }   
            ],
           
            
        }
    ]
}

