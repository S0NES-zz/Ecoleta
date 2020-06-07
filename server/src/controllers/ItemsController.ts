import { Request, Response } from 'express';

import knex from '../database/connection';

class ItemsController {
  async list(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serializedItems = items.map((item) => {
      return {
        ...item,
        ...{
          image: `http://192.168.0.194:3333/uploads/${item.image}`,
        },
      };
    });
    return response.json(serializedItems);
  }
}

export default ItemsController;
