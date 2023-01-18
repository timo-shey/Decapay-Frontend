import styles from './LineItemModal.module.css';
import { useState } from 'react';
import BigCard from '../../UI/BigCard';
import Button from '../../UI/Button';
// import cancel from '../../UI/icons/close-cKT.png'


const LineItemModal = (props) => {
   // const[itemModal, setItemModal]= useState(true)

    const[form, setForm] = useState({
        amount:"",
        category:""
    })

    const handleChange = (event)=>{
            const {value, name} = event.target;
            setForm(prevForm=>({
                ...prevForm,
                [name]:value
             } )
            )   
    }

    const handleClick = ()=>{
        
    }

    const imageClick = ()=>{
        props.setItemModal(null)
    }

    return ( 
        <>

        { props.itemModal &&
        <div>
            <div className={styles.backdrop} onClick={imageClick}></div>
            <BigCard className={styles.lineitem}>
            
            <img src="/assets/close-gFb.png" alt="cancel icon " 
            style={{ 
                    width: '30px',
                    height: '30px',
                    position:"relative",
                    left:'452px',
                    top: '40px'
                    }}
                    onClick={imageClick}/>
    
        <div>
        <p className={styles.title}>Create Budget Line Item</p>
        </div>
        <form>
        <label className= {styles.label} htmlFor='category'>Category</label><br />
        <div >
                   
                    <select 
                        id='category'
                        value={form.category}
                        name='category'
                        onChange={handleChange}
                        className={styles.category}
                        >
                        <option value="">--Select--</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Feeding">Feeding</option>
                     </select>
    
         </div>    
         <label  className= {styles.label} htmlFor='amount'>Projected Amount</label> <br />
                <div className={styles.amount}>         
                    <input 
                       id='amount'
                        type="text"
                        name= "amount" 
                        onChange={handleChange}
                        value={form.amount}
                        placeholder='N0.00'
                     />
                </div>
                <br />
                <br />
                <Button onClick={handleClick} >Create</Button>
        </form>
    </BigCard>
        </div>
       
       }
        
        </>
      
        
     );
}
 
export default LineItemModal;