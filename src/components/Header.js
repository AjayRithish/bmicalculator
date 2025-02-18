import React from 'react';

function Header({ page }) {

    return (
        <header className='container mt-4'>

            <h1>Body Mass Index Calculation</h1>
            
            <p className='mt-3 col-8'>In the calculation tool below, calculate the body mass index of the person you want to know. <b className='text-danger'>"Your gender"</b> <em className='h6'>("Gender")</em> after choosing <kbd>"cm"</kbd> with height in  <kbd>"kg"</kbd> Enter the weight in and <b className='text-primary'>"Calculate"</b> press the button. </p>

            {
                page === false ?
                    <div className="alert alert-primary d-flex align-items-center mt-5" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" height={30} aria-label="Warning:">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <div>
                        If you want to return to the calculation screen <button type="button" className='btn btn-danger btn-sm' disabled>Reset</button> Press the button and you can repeat the same operations again..
                        </div>
                    </div> : null
            }
        </header>
    )
}

export default Header;