import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import { Chip, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import GeneralInfo from './EditProfileModal/GeneralInfo';
import Education from './EditProfileModal/Education';
import Skills from './EditProfileModal/Skills';

const skillData = [
  { id: 0, name: 'php' },
  { id: 1, name: 'css' },
  { id: 2, name: 'html' },
  { id: 3, name: 'javascript' },
  { id: 4, name: 'reactjs' },
  { id: 5, name: 'nodejs' },
  { id: 6, name: 'sass' },
  { id: 7, name: 'postgres' },
  { id: 8, name: 'laravel' },
  { id: 9, name: 'scss' },
];
const useStyle = makeStyles(() => ({
  editIcon: {
    cursor: 'pointer',
  },
}));
export default function EditProfile() {
  const [open, setOpen] = useState(false);
  const [openEdu, setOpenEdu] = useState(false);
  const [openSkill, setOpenSkill] = useState(false);
  const [info, setInfo] = useState('');
  const [education, setEducation] = useState('');
  useEffect(() => {
    getGeneralInfo();
    getEducationInfo();
  }, []);
  const handleInfoOpen = () => {
    setOpen(true);
  };
  const handleInfoClose = () => {
    getGeneralInfo();
    setOpen(false);
  };
  const handleEduOpen = () => {
    setOpenEdu(true);
  };
  const handleEduClose = () => {
    getEducationInfo();
    setOpenEdu(false);
  };
  const handleSkillOpen = () => {
    setOpenSkill(true);
  };
  const handleSkillClose = () => {
    setOpenSkill(false);
  };
  const getGeneralInfo = () => {
    const gf = localStorage.getItem('generalinfo');
    setInfo(JSON.parse(gf));
  };
  const getEducationInfo = () => {
    const edu = localStorage.getItem('education');
    setEducation(JSON.parse(edu));
  };
  const classes = useStyle();
  return (
    <div>
      <MDBContainer>
        <MDBRow>
          Edit Profile
          <MDBCol md="12" className="d-flex text-center">
            <MDBCol md="4">
              <MDBCard>
                <MDBCardBody className="mx-4">
                  <MDBRow className="d-flex justify-content-between">
                    <h6 className="dark-grey-text mb-5">
                      <strong>General Information</strong>
                    </h6>
                    <EditIcon
                      color="error"
                      className={classes.editIcon}
                      onClick={handleInfoOpen}
                    />
                  </MDBRow>

                  <MDBRow className="d-flex justify-content-between align-items-baseline">
                    <h6>
                      <strong>FirstName</strong>
                    </h6>
                    <span>{info.fname}</span>
                  </MDBRow>
                  <MDBRow className="d-flex justify-content-between align-items-baseline">
                    <h6>
                      <strong>LastName</strong>
                    </h6>
                    <span>{info.lname}</span>
                  </MDBRow>
                  <MDBRow className="d-flex justify-content-between align-items-baseline">
                    <h6>
                      <strong>Age</strong>
                    </h6>
                    <span>{info.age}</span>
                  </MDBRow>
                  <MDBRow className="d-flex justify-content-between align-items-baseline">
                    <h6>
                      <strong>Address</strong>
                    </h6>
                    <span>{info.address}</span>
                  </MDBRow>
                  <MDBRow className="d-flex justify-content-between align-items-baseline">
                    <h6>
                      <strong>Phone</strong>
                    </h6>
                    <span>{info.phone}</span>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard>
                <MDBCardBody className="mx-4">
                  <MDBRow className="d-flex justify-content-between">
                    <h6 className="dark-grey-text mb-5">
                      <strong>Education</strong>
                    </h6>
                    <EditIcon
                      color="error"
                      className={classes.editIcon}
                      onClick={handleEduOpen}
                    />
                  </MDBRow>
                  <MDBRow className="d-flex justify-content-between align-items-baseline">
                    <h6>
                      <strong>Matric</strong>
                    </h6>
                    <span>{education.matric}</span>
                  </MDBRow>
                  <MDBRow className="d-flex justify-content-between align-items-baseline">
                    <h6>
                      <strong>Secondary</strong>
                    </h6>
                    <span>{education.secondary}</span>
                  </MDBRow>
                  <MDBRow className="d-flex justify-content-between align-items-baseline">
                    <h6>
                      <strong>Hire Education</strong>
                    </h6>
                    <span>{education.hireEdu}</span>
                  </MDBRow>
                  <MDBRow className="d-flex justify-content-between align-items-baseline">
                    <h6>
                      <strong>University</strong>
                    </h6>
                    <span>{education.uni}</span>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard>
                <MDBCardBody className="mx-4">
                  <MDBRow className="d-flex justify-content-between">
                    <h6 className="dark-grey-text mb-5">
                      <strong>Skills</strong>
                    </h6>
                    <EditIcon
                      color="error"
                      className={classes.editIcon}
                      onClick={handleSkillOpen}
                    />
                  </MDBRow>
                  <div className="text-left">
                    {skillData.map((skill, index) => (
                      <span key={index} className="pr-2 pb-2 mb-2">
                        <Chip label={skill.name} />
                      </span>
                    ))}
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          {open && <GeneralInfo show={open} onClose={handleInfoClose} info={info} />}
        </MDBRow>
        <MDBRow>
          {openEdu && <Education show={openEdu} onClose={handleEduClose} />}
        </MDBRow>
        <MDBRow>
          {openSkill && <Skills show={openSkill} onClose={handleSkillClose} />}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
