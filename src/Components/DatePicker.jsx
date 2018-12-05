import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const DatePicker = (props) => {
    return (
        <div style={{margin: "25px 10%", textAlign: 'center'}}>

            <form>
                <TextField 
                    id="startDate"
                    label="Month Start"
                    type="text"
                    defaultValue="201811"
                    className="monthSt"
                    variant='outlined'

                /> 
                <span style={{lineHeight: '60px', padding: '80px'}}> TO </span>
                <TextField 
                    id="endDate"
                    label="Month End"
                    type="text"
                    defaultValue="201811"
                    className="monthSt"
                    variant='outlined'

                /> 
                <Button /> 
            </form>
        </div>
    )
}


export default DatePicker;