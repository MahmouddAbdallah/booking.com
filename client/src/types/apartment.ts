export type apartmentType ={
    _id:string,
    title:string,
    location:{
        address:string,
        city: string,
    },
    numberOfRooms:number,
    typeOfRooms:[
        {
            name:string,
        }
    ],
    floor:{
        index: number, 
        total: number, 
    },
    price:number,
    ReviewScore:{
        type:number,
        min:1,
        max:5
    },
    description:string,
    images: string[],
    facilities:{
        view:boolean,
        balcony:boolean,
        pool:boolean,
        bath:boolean,
        terrace:boolean,
        safe:boolean,
        tv: boolean,
        familyRooms:boolean,
        wifi:boolean,
        parking:boolean,
        kitchen:boolean,
        Bathroom:boolean,
        Washingmachine:boolean,
    },
    rules:{
        CheckIn:{
            time: {
                from:string,
                to: string
            }, 
            message:string
        },
        CheckOut:{
            time: {
                from:string,
                to: string
            }, 
            message:string
        },
        childrenAndBeds:string,
        smoking:string,
        pets: string,
        ageRestriction:string,
        Damagepolicy:string
    },
    authorizedUser: string
}
export type ImageDataType = string | File;