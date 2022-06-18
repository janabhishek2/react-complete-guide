import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from '../UI/Card';
function Expenses(props) {
  return (
    <Card className='expenses'>
        {props.expenses.map(exp=>{
            return <ExpenseItem expenseDate={exp.dt} expenseTitle={exp.title} expenseAmount={exp.amt}/>
        })}
    </Card>
  )
}

export default Expenses