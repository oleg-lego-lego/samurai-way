import React from 'react';

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    render () {
        return (
            <div>
                <div>
                    <span>{this.props.status}</span>
                </div>
                <div>
                    <input value={this.props.status}/>
                </div>
            </div>
        );
    }
}
