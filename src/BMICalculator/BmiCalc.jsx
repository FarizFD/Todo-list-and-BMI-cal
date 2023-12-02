import React, { useState } from 'react'

const BmiCalc = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [result, setResult] = useState('');
    const [message,setMessage] = useState('');
   

    const handleInputHeight = (e) => {
        setHeight(e.target.value)
    };

    const handleInputWeight = (e) => {
        setWeight(e.target.value)
    }

    const handleCalculate = () => {

        const convertToDisplayBMI=(calculate)=>{
            const cal1 = calculate*100000;
            const cal2 = Math.round(cal1*10)/100
            return cal2
        }
        const checkHeight = height;
        const checkWeight = weight;
        const BMI = (checkWeight / (checkHeight * checkHeight));
      const output = convertToDisplayBMI(BMI);
      if(height&&weight===''){
      setResult(0)

      }
      else{
        setResult(output)
      }
      
      if (output < 18) {
        setMessage('Underweight');
      } else if (output >= 18 && output <= 25) {
        setMessage('Healthy');
      } else if (output > 25) {
        setMessage('Overweight');
      }
      };

    return (
        <div className='card w-25 mt-5' style={{ marginLeft: '37%' }}>
            <div >
                <h4 className='display-5'>Let's Check the BMI</h4>
                <div className='form-group '>
                    <label htmlFor='heightInput'>Height (in cm):</label>
                    <input id='heightInput' className='form-control shadow' type='number' value={height} onChange={(e) => handleInputHeight(e)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='weightInput'>Weight (in cm):</label>
                    <input id='weightInput' className=' form-control shadow ' type='number' value={weight} onChange={(e) => handleInputWeight(e)} />
                </div>
                <div style={{marginTop:'10%'}}>
                    <span ><mark>{result}</mark></span>
                    <span className='text-muted'>{message}</span>
                   
                </div>
                <div className='mt-5'>
                    <button  className='btn btn-primary' onClick={() => handleCalculate()}>Lets Go</button>
                </div>
            </div>
        </div>
    )
}

export default BmiCalc


