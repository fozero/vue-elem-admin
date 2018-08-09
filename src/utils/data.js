module.exports= {
    IS_GOOD:[
        {
            value:'2',
            label:'全部'
        },
        {
            value:'0',
            label:'未投'
        },{
            value:'1',
            label:'已投'
        }
    ],
    /*任务状态*/
    TASK_STATUS:[
        {
            value:'3',
            label:'全部'
        },
        {
            value:'0',
            label:'未沟通'
        },
        {
            value:'1',
            label:'待审核'
        },
        
        {
            value:'-1',
            label:'审核未通过'
        }
    ],
    /*个人记录*/
    MY_RECORD:[
        {
            value:'2',
            label:'全部'
        },
        {
            value:'1',
            label:'仅查看已标记'
        },
        {
            value:'0',
            label:'仅查看未标记'
        }
    ],

    /*开户状态*/
    KF_STATUS:[
        {
            value:'2',
            label:'全部'
        },
        {
            value:'1',
            label:'已开户'
        },
        {
            value:'0',
            label:'未开户'
        }
    ],
    /*任务类型*/
    TASK_TYPE:[
        {
            value:'zcwtzyh',
            label:'注册未投资用户',
            key:'1',
        },
        {
            value:'lsyh',
            label:'流失用户',
            key:'2',
        },
        {
            value:'txyh',
            label:'提现用户',
            key:'3',
        },
        {
            value:'cdzjyh',
            label:'沉淀资金用户',
            key:'4',
        },
        {
            value:'zryh',
            label:'转让用户',
            key:'5',
        },
        {
            value:'hyyh',
            label:'活跃用户',
            key:'6',
        },
        {
            value:'dzjyh',
            label:'大资金用户',
            key:'7',
        }
    ],
   /*待收金额*/
    DUE_PRINCIPLE_RANGE:[
        {
            value:'1',
            label:'非0用户'
        },
        {
            value:'0',
            label:'为0用户'
        }
    ],
    
    /*提现总金额*/
    ALL_WITHDRAW_RANGE:[
        {
            value:'',
            label:'默认'
        },
        {
            value:'1',
            label:'1000-1W'
        },
        {
            value:'2',
            label:'1W-5W'
        },
        {
            value:'3',
            label:'5W-10W'
        },
        {
            value:'4',
            label:'>10W'
        }
    ],
    /*历史投资总额*/
    
    ALL_INVEST_MONEY_RANGE:[
        {
            value:'4',
            label:'>100W'
        },
        {
            value:'3',
            label:'50W-100W'
        },
        {
            value:'2',
            label:'20W-50W'
        },
        {
            value:'1',
            label:'10W-20W'
        }
    ],
    CALL_STATE:[
        {
            value:'1',
            label:'已接通'
        },
        {
            value:'2',
            label:'无人接听'
        },
        {
            value:'3',
            label:'拒绝'
        },
        {
            value:'4',
            label:'无法接通'
        },
        {
            value:'5',
            label:'挂断'
        },
        {
            value:'6',
            label:'非本人'
        },
        {
            value:'7',
            label:'停机'
        },
        {
            value:'8',
            label:'观望'
        },
        {
            value:'9',
            label:'周转'
        },
        {
            value:'10',
            label:'不再关注'
        },
        {
            value:'11',
            label:'转投其它'
        },
        {
            value:'12',
            label:'其它原因'
        }
    ]


}