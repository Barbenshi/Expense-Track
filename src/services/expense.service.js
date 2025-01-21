import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import _expenses from '../data/expenses.json'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'expense'

export const expenseService = {
  query,
  getById,
  save,
  remove,
  getEmptyExpense
}
window.cs = expenseService

async function query(filterBy = { name: '', capacity: 0 }) {
//   return httpService.get(STORAGE_KEY, filterBy)

  var expenses = await storageService.query(STORAGE_KEY)
  if (!expenses.length) {
    expenses = _expenses;
    utilService.saveToStorage(STORAGE_KEY, expenses)
  }
  
  if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      expenses = expenses.filter(expense => regex.test(expense.vendor) || regex.test(expense.description))
  }
  if (filterBy.price) {
      expenses = expenses.filter(expense => expense.price <= filterBy.price)
  }
  return expenses
}
async function getById(expenseId) {
  return storageService.get(STORAGE_KEY, expenseId)
//   return await httpService.get(`expense/${expenseId}`)
}

async function remove(expenseId) {
  await storageService.remove(STORAGE_KEY, expenseId)
//   return httpService.delete(`expense/${expenseId}`)
}
async function save(expense) {
  let savedExpense
  if (expense._id) {
    savedExpense = await storageService.put(STORAGE_KEY, expense)
    // savedExpense = await httpService.put(`expense/${expense._id}`, expense)
  } else {
    // Later, owner is set by the backend
    // expense.owner = userService.getLoggedinUser()
    expense.dateCreated = Math.floor(Date.now() / 1000) 
    savedExpense = await storageService.post(STORAGE_KEY, expense)
    // savedExpense = await httpService.post('expense', expense)
  }
  return savedExpense
}

function getEmptyExpense() {
  return { "description": "", "amount": "", "currency": "ILS" }
}