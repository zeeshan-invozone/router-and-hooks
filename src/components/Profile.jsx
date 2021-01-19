import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import { Chip, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import GeneralInfo from './EditProfileModal/GeneralInfo';
import Education from './EditProfileModal/Education';
import Skills from './EditProfileModal/Skills';

const useStyle = makeStyles(() => ({
  editIcon: {
    cursor: 'pointer',
  },
  begeinner: {
    color: 'white',
    backgroundColor: 'blue',
  },
  mediocar: {
    color: 'white',
    backgroundColor: 'yellow',
  },
  experts: {
    color: 'white',
    backgroundColor: 'green',
  },
}));
export default function Profile() {
  const [open, setOpen] = useState(false);
  const [openEdu, setOpenEdu] = useState(false);
  const [openSkill, setOpenSkill] = useState(false);
  const [info, setInfo] = useState({
    fname: 'zeeshan',
    lname: 'akram',
    age: 22,
    address: 'Gujranwala',
    phone: '03120876342',
  });
  const [skills, setSkill] = useState([]);
  const [education, setEducation] = useState({
    matric: 'science',
    secondary: 'ics',
    hireEdu: 'BSCS',
    uni: 'Islami International',
  });

  useEffect(() => {
    getGeneralInfo();
    getEducationInfo();
    getSkills();
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
    getSkills();
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
  const getSkills = () => {
    const skl = localStorage.getItem('skills');
    if (skl) {
      const arr = skl.split(',');
      const newArr = [];
      arr.forEach((ele) => {
        const obj = {};
        obj.value = ele;
        obj.name = ele;
        newArr.push(obj);
      });
      setSkill(newArr);
    } else {
      setSkill('');
    }
  };

  const ShowBadge = () => {
    const styles = useStyle();
    return (
      <>
        {skills.length <= 4 ? (
          <div>
            <span className={styles.begeinner}>Beginner</span>
          </div>
        ) : skills.length <= 7 ? (
          <div>
            <span className={styles.mediocar}>Mediocar</span>
          </div>
        ) : (
          <div>
            <span className={styles.experts}>Expert</span>
          </div>
        )}
      </>
    );
  };
  const classes = useStyle();
  return (
    <div>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="d-flex text-center flex-column">
            <MDBCol>
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
            <MDBCol>
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
            <MDBCol>
              <MDBCard>
                <MDBCardBody className="mx-4">
                  <MDBRow className="d-flex justify-content-between">
                    <h6 className="dark-grey-text mb-5">
                      <strong>Skills</strong>
                    </h6>
                    <ShowBadge />
                    <EditIcon
                      color="error"
                      className={classes.editIcon}
                      onClick={handleSkillOpen}
                    />
                  </MDBRow>
                  <div className="text-left">
                    {skills.length > 0
                      ? skills.map((skill, index) => (
                          <span key={index} className="pr-2 pb-2 mb-2">
                            <Chip label={skill.name} color="primary" size="small" />
                          </span>
                        ))
                      : 'Skills Not Added Yet'}
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
