'use strict';
import {Request} from 'express';

class FeaturesApi {
    req: Request;
    Model: any; // Update this to the actual type of your Model

    constructor(req: Request, Model: any) {
        this.req = req;
        this.Model = Model;
    }

    filter(): FeaturesApi {
        let query = this.req.query;
        const query2 = JSON.stringify(query);
        query = JSON.parse(query2.replace(/\b(gte|gt|lte|eq)\b/g, (match) => `$${match}`));
        const v = ['page', 'limit', 'fields', 'keyword', 'sort', 'select'];
        v.forEach((element) => {
            delete query[element];
        });
        this.Model = this.Model.find(query);
        return this;
    }

    sort(): FeaturesApi {
        let sort = this.req.query.sort || '-createdAt';
        sort = (sort as string).split(',').join(' ');
        this.Model = this.Model.sort(sort);
        return this;
    }

    fields(): FeaturesApi {
        let fields = this.req.query.fields || '-__v';
        fields = (fields as string).split(',').join(' ');
        this.Model = this.Model.select(fields);
        return this;
    }

    search(): FeaturesApi {
        let keyword = this.req.query.keyword;
        if (keyword) {
            let search: any = {};
            search.$or = [
                { title: { $regex: keyword, $options: 'i' } },
                { first_name: { $regex: keyword, $options: 'i' } },
            ];
            this.Model = this.Model.find(search);
        }
        return this;
    }
}

export default FeaturesApi;