const stageFilter = (stage) => {
        if (!stage) return ''
        let str = "";
        switch (stage) {
            case "2":
                str = "启用";
                break;
            case "-1":
                str = "禁用";
                break;
            default:
                str = '';
                break;
        }
        return str;
    }
    /**
     * 将分转化为元
     * 
     * @param {Number} money 
     * @returns {Number}
     */
const centToYuanFilter = (money) => {
    if (!money) return '0';
    return money / 100
}
const is_receiveFilter = (value) => {
    if (!value) return ''
    let str = "";
    switch (value) {
        case "0":
            str = "未开户";
            break;
        case "1":
            str = "已开户";
            break;
        default:
            str = '';
            break;
    }
    return str;
}
const due_principleFilter = (value) => {
    if (!value) return ''
    let str = "";
    switch (value) {
        case "0":
            str = "余额为0用户";
            break;
        case "1":
            str = "余额非0用户";
            break;
        default:
            str = '';
            break;
    }
    return str;
}
const all_withdrawFilter = (value) => {
    if (!value) return ''
    let str = "";
    switch (value) {
        case "1":
            str = "1000--1W";
            break;
        case "2":
            str = "1W-5W";
            break;
        case "3":
            str = "5W-10W";
            break;
        case "4":
            str = ">10W";
            break;
        default:
            str = '';
            break;
    }
    return str;
}
const all_invest_moneyFilter = (value) => {
    if (!value) return ''
    let str = "";
    switch (value) {
        case "1":
            str = "10W-20W";
            break;
        case "2":
            str = "20W--50W";
            break;
        case "3":
            str = "50W--100W";
            break;
        case "4":
            str = ">100W";
            break;
        default:
            str = '';
            break;
    }
    return str;
}
const task_typeFilter = (value) => {
    
    if (!value) return ''
    let str = "";
    switch (value) {
        case "1":
            str = "注册未投资用户";
            break;
        case "2":
            str = "流失用户";
            break;
        case "3":
            str = "提现用户";
            break;
        case "4":
            str = "沉淀资金用户";
            break;
        case "5":
            str = "转让用户";
            break;
        case "6":
            str = "活跃用户";
            break;
        case "7":
            str = "大资金用户";
            break;
        default:
            str = '';
            break;
    }
    return str;
}
const task_stateFilter = (value) => {
    
    if (!value) return ''
    let str = "";
    switch (value) {
        case "0":
            str = "未沟通";
            break;
        case "1":
            str = "待审核";
            break;
        case "2":
            str = "审核通过";
            break;
        case "-1":
            str = "审核未通过";
            break;
        default:
            str = '';
            break;
    }
    return str;
}
const call_stateFilter=(value)=>{
    if (!value) return ''
    let str = "";
    switch (value) {
        case "1":
            str = "已接通";
            break;
        case "2":
            str = "无人接听";
            break;
        case "3":
            str = "拒绝";
            break;
        case "4":
            str = "无法接通";
            break;
        case "5":
            str = "挂断";
            break;
        case "6":
            str = "非本人";
            break;
        case "7":
            str = "停机";
            break;
        case "8":
            str = "观望";
            break;
        case "9":
            str = "周转";
            break;
        case "10":
            str = "不再关注";
            break;
        case "11":
            str = "转投其它";
            break;
        case "12":
            str = "其它原因";
            break;
        default:
            str = '';
            break;
    }
    return str;
}
const is_goodFilter=(value)=>{
    if (!value) return ''
    let str = "";
    switch (value) {
        case "1":
            str = "已投";
            break;
        case "0":
            str = "未投";
            break;
       
        default:
            str = '';
            break;
    }
    return str;
}
const toFixedFilter=(value,num)=>{
    //debugger;
    if (!value) return '0.00'
    return Number.parseFloat(value).toFixed(num);
  
}

export default {
    stageFilter,
    centToYuanFilter,
    is_receiveFilter,
    due_principleFilter,
    all_withdrawFilter,
    all_invest_moneyFilter,
    task_typeFilter,
    task_stateFilter,
    call_stateFilter,
    is_goodFilter,
    toFixedFilter
}