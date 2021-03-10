'use strict';
Date.prototype.format = function(range){
    if(!this.valueOf()) return '';
    let _this = this;
    return range.replace(/(yyyy|MM|dd|hh|mm|ss|ms)/gi,function($1){
        switch ($1){
            case 'yyyy' : return _this.getFullYear();
            case 'MM' : return ('0' + (_this.getMonth()+1)).slice(-2);
            case 'dd' : return ('0' + _this.getDate()).slice(-2);
            case 'hh' : return _this.getHours();
            case 'mm' : return ('0' + _this.getMinutes()).slice(-2);
            case 'ss' : return ('0' + _this.getSeconds()).slice(-2);
            default : return $1
        }
    });
}

const Disclosure = function(){
    this.dataUrl = 'https://project-team.upbit.com/api/v1/disclosure?region=kr&per_page=20';
    this.getDate = function(range){
        let date = new Date();
        return date.format(range);
    }
    this.today = this.getDate('yyyy-MM-dd');
}



const disclosure = new Disclosure();