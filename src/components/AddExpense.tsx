import { expenseService } from '../services/expense.service'
import { OnAddExpense } from "../types/expense"
import { useForm } from "../customHooks/useForm"
import { CustomSelect } from './CustomSelect'

export const AddExpense = ({ onAddExpense }: { onAddExpense: OnAddExpense }) => {
    const [expense, handleChange, setExpense] = useForm(expenseService.getEmptyExpense())

    const handleOnAddExpense = () => {
        onAddExpense({ ...expense })
        setExpense(expenseService.getEmptyExpense())
    }

    const handleCurrencyChange = (currency: string) => {
        setExpense( (prevExpense) => ({ ...prevExpense, currency}))
    }

    return (
        <div className="add-expense flex gap-5">
            <input type="text" value={expense.description} name="description" placeholder='Add new expense...' onChange={handleChange}/>
            <input type="number" value={expense.amount} name="amount" placeholder='Write amount' min={1} onChange={handleChange} />
            <CustomSelect onSelect={handleCurrencyChange} options={{"USD": "$ (USD)", "ILS": "₪ (ILS)", "EUR": "€ (EUR)"}} value={expense.currency}/>
            <button onClick={handleOnAddExpense} className='primary'>+</button>
        </div>
    )
}