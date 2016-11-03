'use strict';

angular.module('inspinia')
  .controller('MainController', function () {

    var vm = this;

    vm.notifUsers = [{
      id:'1',
      userName: 'vasya.pupkin',
      photo:'/assets/images/patterns/triangular.png',
      date: 1288323623006,
      action: { activity:'Подтвердил свой емейл.',
        inviteName:'',
        inviteId: ''
        }
    },{
      id:'2',
      userName: 'misha',
      photo:'/assets/images/patterns/triangular.png',
      date: 1288223623003,
      action: { activity:'Получил приглашение от ',
        inviteName:'Вася Пупкин',
        inviteId: '1'
      }


    },{
      id:'3',
      userName: 'vasya.pupkin',
      photo:'/assets/images/patterns/triangular.png',
      date: 1285323623006,
      action: { activity:'Подтвердил свой емейл.',
        inviteName:'',
        inviteId: ''
      }
    },{
      id:'4',
      userName: 'vasya',
      photo:'/assets/images/patterns/triangular.png',
      date: 1288325623006,
      action: { activity:'Получил приглашение от ',
        inviteName:'Вася Пупкин',
        inviteId: '1'
      }
    },{
      id:'5',
      userName: 'vasya.pupkin',
      photo:'/assets/images/patterns/triangular.png',
      date: 1288323623006,
      action: { activity:'Подтвердил свой емейл.',
        inviteName:'',
        inviteId: ''
      }
    },{
      id:'6',
      userName: 'misha',
      photo:'/assets/images/patterns/triangular.png',
      date: 1288223623003,
      action: { activity:'Получил приглашение от ',
        inviteName:'Вася Пупкин',
        inviteId: '1'
      }

    },{
      id:'7',
      userName: 'vasya.pupkin',
      photo:'/assets/images/patterns/triangular.png',
      date: 1285323623006,
      action: { activity:'Подтвердил свой емейл.',
        inviteName:'',
        inviteId: ''
      }
    },{
      id:'8',
      userName: 'vasya',
      photo:'/assets/images/patterns/triangular.png',
      date: 1288325623006,
      action: { activity:'Получил приглашение от ',
        inviteName:'Вася Пупкин',
        inviteId: '1'
      }
    }];
    
    vm.statistic = {
      date: Date.now(),
      total:'',
      new:'0',
      available:'0',
      repaid:'0'
    }
  });
