import { v4 } from "https://deno.land/std/uuid/mod.ts";

import { Transaction } from "../types/transaction.ts";
import { Transactions as transactions } from "../models/transaction.ts";

const getTransactions = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: transactions
  }
}

const addTransaction = async ({ request, response }: { request: any; response: any })=> {
    const { value: transactionBody } = await request.body();

    const { title, description, value, type }: Transaction = transactionBody;

    if(!title || !description || !value || !type){
      response.status = 400;
      response.body = {
        success: false,
        message: "You must fill all fields!"
      }
      return response;
    }

    const transaction: Transaction = {
      id: v4.generate(),
      title,
      description,
      value,
      type
    };

    transactions.push(transaction);
    response.status = 201;
    response.body = {
      success: true,
      data: transaction
    }
    return response;
}

const deleteTransaction = ({ params, response }: { params: { id: string }; response: any }) => {
  const transactionIndex = transactions.findIndex(transaction => transaction.id === params.id);
  
  if(transactionIndex < 0){
    response.status = 400;
    response.body ={
      success: true,
      message: 'Transaction not found!'
    }
    return response;
  }else{
    transactions.splice(transactionIndex, 1);

    response.status = 201;
    response.body ={
      success: true,
      message: 'Transcation has been deleted!'
    }
  }
}

export { getTransactions, addTransaction, deleteTransaction }; 