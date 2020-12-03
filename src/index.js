import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommmentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
    
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommmentDetail author={faker.name.firstName()} time="6:00PM"/> 
            </ApprovalCard>
            
            <ApprovalCard>
                <CommmentDetail author={faker.name.firstName()} time="7:00PM"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommmentDetail author={faker.name.firstName()} time="8:00PM"/>
            </ApprovalCard>
            
        </div>
    );
    
}

ReactDOM.render(<App/>, document.querySelector('#root'))