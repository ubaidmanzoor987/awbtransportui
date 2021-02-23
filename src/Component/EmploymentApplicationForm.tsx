import { execArgv } from 'process';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FormControl, TextField, InputLabel, MenuItem, Select, Button } from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';

import {Address} from "../Types/types";
import { user_data } from './User';
import SideBar from "./SideBar";
import NavbarCareer from './NavbarCareer';
import Footer from './Footer';

type EmploymentApplicationStates = {
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string,
    dateofBirth: string,
    socialSecurity: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    lastThreeYearResidenceCheck: boolean,
    addresses: Address[],
    resume?: File,
    startTime: string,
    hearAbout: string,
    eligibletoWorkInUnitedState: boolean,
    classAExperienceLevel: boolean,
    willingForDrugTest: boolean,
    errors: formErrors ,
    open :boolean
}

type formErrors = {
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string,
    dateofBirth: string,
    socialSecurity: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    lastThreeYearResidenceCheck: boolean,
    addresses: Address[],
    resume?: File,
    startTime: string,
    hearAbout: string,
    eligibletoWorkInUnitedState: boolean,
    classAExperienceLevel: boolean,
    willingForDrugTest: boolean,
}

interface EmploymentApplicationProps {
    classes: any
} 

const styles = (theme: Theme) => ({
    root: {
    }
});

const states = [
    { value: "Armed Forces America" },
    { value: "Armed Forces" },  
    { value: "Armed Forces Pacific"}, 
    { value: "Alabama"}, 
    { value: "Alaska"}, 
    { value: "American Samoa" }, 
    { value: "Arizona" }, 
    { value: "Arkansas" }, 
    { value: "California" }, 
    { value: "Colorado" }, 
    { value: "Connecticut" }, 
    { value: "District of Columbia" }, 
    { value: "Delaware" }, 
    { value: "Florida" },
    { value: "Georgia" },
    { value: "Guam" },
    { value: "Hawaii" },
    { value: "Idaho" },
    { value: "Illinois" },
    { value: "Indiana" },
    { value: "Iowa" },
    { value: "Kansas" },
    { value: "Kentucky" },
    { value: "Louisiana" },
    { value: "Maine" },
    { value: "Maryland" },
    { value: "Massachusetts" },
    { value: "Michigan" },
    { value: "Minnesota" },
    { value: "Mississippi" },
    { value: "Missouri" },
    { value: "Montana" },
    { value: "Nebraska" },
    { value: "New Hampshire" },
    { value: "New Jersey" },
    { value: "New Mexico" },
    { value: "New York" }, 
    { value: "Nevada" },
    { value: "North Carolina" },
    { value: "North Dakota" },
    { value: "Northern Mariana Islands" },
    { value: "Ohio" },
    { value: "Oklahoma" },
    { value: "Oregon" },
    { value: "Pennsylvania" },
    { value: "Puerto Rico" },
    { value: "Rhode Island" },
    { value: "South Carolina" },
    { value: "South Dakota" },
    { value: "Tennessee" }, 
    { value: "Texas" },
    { value: "Utah" },
    { value: "Vermont" },
    { value: "Virgin Islands" },
    { value: "Virginia" },
    { value: "Washington" },
    { value: "West Virginia" },
    { value: "Wisconsin" },
    { value: "Wyoming" },
]

class EmploymentApplication extends Component<EmploymentApplicationProps, EmploymentApplicationStates> {
    
    constructor(props: any) {
        super(props);
        const initstate  = {
            first_name: '',
            last_name: '',
            phone_number: '',
            dateofBirth: '',
            socialSecurity: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            lastThreeYearResidenceCheck: false,
            addresses: [],
            startTime: '',
            hearAbout: '',
            eligibletoWorkInUnitedState: false,
            classAExperienceLevel: false,
            willingForDrugTest: false,
            email: '',
            open: false,
            errors: {
                first_name: '',
                last_name: '',
                phone_number: '',
                dateofBirth: '',
                socialSecurity: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
                lastThreeYearResidenceCheck: false,
                addresses: [],
                startTime: '',
                hearAbout: '',
                eligibletoWorkInUnitedState: false,
                classAExperienceLevel: false,
                willingForDrugTest: false,
                email: '',
            } 
        };
        this.state = initstate;
        
    }
    componentDidMount() {
        console.log("context", this.context);
        if (this.context.data.user_name) {
            this.setState(this.context.data);
        }
        
    }
    
    handleChange = (event: any) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log("handleChaneg", value);
        let errors = this.state.errors;
        switch (name) {
            case 'first_name':
                errors.first_name = value == '' ? 'Required!' : '';
                break;
            case 'phone_number':
                errors.phone_number = value == '' ? 'Required' : '';
                break;
            case 'dateofBirth':
                errors.dateofBirth = value == '' ? 'Required' : '';
                break;
            case 'socialSecurity':
                errors.socialSecurity = value == '' ? 'Required' : '';
                break;
            default:
                break;
        }
        this.setState(Object.assign(this.state, { errors, [name]: value }));
        console.log("this.state", this.state);
    };

    render() {
        const { classes } = this.props;
        const { errors } = this.state;
        if (!this.context.data.user_name ) {
            return <Redirect to="/login" />
        }
        return (
            <>
            <NavbarCareer addLogout={true} /> 
                <section className="form-section" id="employmentapplication">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 mySideBar">
                                <SideBar activeEmployment={false} />
                            </div>
                            <div className="col-md-10">
                                <div className="text-center">
                                    <h4 className="form-header-h2 text-center">AWB Transport Inc., Employment Application</h4>
                                    <h5 className="section-subheading text-muted">Employment Application</h5>
                                </div>
                                <hr/>
                                <form className="formStyle" noValidate autoComplete="off">
                                    <div>
                                        <TextField
                                            name = "first_name"
                                            required = { errors.first_name == ''}
                                            error = { errors.first_name != ''}
                                            id= "filled-required"  
                                            label={ errors.first_name !='' ? errors.first_name : "First Name"}
                                            variant= "filled" 
                                            onChange={(e)=>this.handleChange(e)}
                                            className = "col-md-5 mytextField"
                                            value= {this.state.first_name}
                                        />
                                        <TextField
                                            label="Last Name"
                                            value={this.state.last_name}
                                            variant="filled"
                                            onChange={(e)=>this.handleChange(e)}
                                            className = "col-md-5 mytextField"
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            name = "phone_number"
                                            required = { errors.phone_number == ''}
                                            error = { errors.phone_number != ''}
                                            id= "filled-required"  
                                            label={ errors.phone_number !='' ? errors.phone_number : "Phone Number"}
                                            variant= "filled" 
                                            onChange={(e)=>this.handleChange(e)}
                                            className = "col-md-5 mytextField"
                                            value= {this.state.phone_number}
                                        />
                                        <TextField
                                            label="Email"
                                            variant="filled"
                                            value={this.state.email}
                                            className = "col-md-5 mytextField"
                                            color='primary'
                                            id="outlined-read-only-input"
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                    </div>  
                                    <div>
                                        <TextField
                                            name = "dateofBirth"
                                            required = { errors.dateofBirth == ''}
                                            error = { errors.dateofBirth != ''}
                                            id= "date"
                                            type = "date"  
                                            label={ errors.dateofBirth !='' ? errors.dateofBirth : "Date Of Birth"}
                                            variant= "filled" 
                                            onChange={(e)=>this.handleChange(e)}
                                            className = "col-md-5 mytextField"
                                            value= {this.state.dateofBirth}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                         <TextField
                                            name = "socialSecurity"
                                            required = { errors.socialSecurity == ''}
                                            error = { errors.socialSecurity != ''}
                                            id= "filled-required"  
                                            label={ errors.socialSecurity !='' ? errors.socialSecurity : "Social Security"}
                                            variant= "filled" 
                                            onChange={(e)=>this.handleChange(e)}
                                            className = "col-md-5 mytextField"
                                            value= {this.state.socialSecurity}
                                        />
                                    </div>  
                                    <div>
                                        <TextField
                                            label="City"
                                            value={this.state.city}
                                            variant="filled"
                                            onChange={(e)=>this.handleChange(e)}
                                            className = "col-md-3 mytextField"
                                        />
                                         <Select
                                            value={this.state.state}
                                            variant="filled"
                                            name = "state"
                                            labelId="demo-controlled-open-select-label"
                                            id="demo-controlled-open-select"
                                            open={this.state.open}
                                            onClose={()=>this.setState({...this.state, open: false})}
                                            onOpen={()=>this.setState({...this.state, open: true})}
                                            onChange={(e)=>this.handleChange(e)}
                                            className = "col-md-3 mytextField"
                                        >
                                            <MenuItem value='' disabled>State</MenuItem>
                                            {states.map(state=>(
                                                
                                                <MenuItem value={state.value} key={state.value} >{state.value}</MenuItem>
                                            ))}   
                                        </Select>
                                    </div>                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
            </>
        )
    }
}
EmploymentApplication.contextType = user_data;
 
export default withStyles(styles, {withTheme: true})(EmploymentApplication);
