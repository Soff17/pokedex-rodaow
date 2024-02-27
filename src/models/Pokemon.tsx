export interface Pokemon{
    id:number;
    name:string;
    abilities:Ability[];
    sprites:{
        other:{
            'official-artwork':{
                front_default:string;
            }
        }
    }
    types:Type[];
    stats:Stat[];
}

interface Ability{
    ability:{
        name:string;
        url:string;
    }
}

interface Type{
    type:{
        name:string;
        url:string;
    }
}

interface Stat{
    base_stat: number;
    stat:{
        name:string;
        url:string;
    }
}