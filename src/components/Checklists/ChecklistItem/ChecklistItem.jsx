// - IMPORTING -
// React
import React from 'react'
// Css
import '../ChecklistItem/ChecklistItem.css'

// - ChecklistItem COMPONENT -
function ChecklistItem({checklist}) {
    // Logging
    console.log(`checklist ${checklist.checklist_id} is:`, checklist);

return(
    <React.Fragment>
    <div className='checklist-box'>
    {/* Priorities */}
    <div>

    </div>

    <div>

    </div>

    <div>

    </div>

    </div>
    </React.Fragment>

)
}; // - END ChecklistItem COMPONENT -

// - EXPORTING ChecklistItem COMPONENT -
export default ChecklistItem