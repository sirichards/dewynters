import React, { Component } from 'react';
import client from '../../services/Client';
import TeamMember from './TeamMember';

class Team extends Component {
    constructor() {
        super()
        this.state = {members: []}
    }
    componentDidMount() {
        client.getEntries({content_type: 'teamMember'}).then((response) => {
            this.setState({members: response.items})
        })
    }
    render() {

        const teamMembers = this.state.members.map( (member, i) => {
            return <TeamMember member={member} key={i} />
        })

        return (
            <div className="container-fluid">
                <div className="row">
                    {teamMembers}
                </div>
            </div>
        )
    }

}

export default Team;