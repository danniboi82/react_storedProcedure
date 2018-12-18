import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const DatePicker = (props) => {
    return (
        <div style={{ backgroundImage:  'linear-gradient(rgba(1, 1, 1, 0), rgba(1, 1, 1, 0)), URL("http://nexen-mancity.com/en/wp-content/uploads/2016/09/business-network.jpg")', backgroundSize: "cover" ,textAlign: 'center', borderBottom: '5px solid #740081' }}>

            <form style={{ margin: "auto 10%", paddingTop: '25px', paddingBottom: '25px' }}>
                <TextField
                    id="startDate"
                    label="Month Start"
                    type="text"
                    placeholder="YYYYMM"
                    className="monthSt"
                    variant='outlined'

                />
                <span style={{ lineHeight: '60px', padding: '80px' }}> TO </span>
                <TextField
                    id="endDate"
                    label="Month End"
                    type="text"
                    placeholder="YYYYMM"
                    className="monthSt"
                    variant='outlined'

                />
                <br />
                <Button style={{ marginTop: '15px' }}
                    variant='raised' color='secondary'>
                    Search
                </Button>
            </form>
        </div>
    )
}


export default DatePicker;