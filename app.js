document.getElementById('writeButton').addEventListener('click', function() {
    const fullName = document.getElementById('fullName').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const bloodType = document.getElementById('bloodType').value;
    const drugAllergies = document.getElementById('drugAllergies').value;
    const foodAllergies = document.getElementById('foodAllergies').value;
    const environmentalAllergies = document.getElementById('environmentalAllergies').value;
    const diabetes = document.getElementById('diabetes').value;
    const hypertension = document.getElementById('hypertension').value;
    const asthma = document.getElementById('asthma').value;

    const patientData = {
        fullName,
        age,
        gender,
        bloodType,
        drugAllergies,
        foodAllergies,
        environmentalAllergies,
        chronicConditions: {
            diabetes,
            hypertension,
            asthma
        }
    };

    // Save patientData to Firebase
    const db = getDatabase(); // For Realtime Database
    const newPatientRef = db.ref('patients').push();
    newPatientRef.set(patientData)
        .then(() => {
            document.getElementById('message').innerText = 'Data saved successfully!';
        })
        .catch((error) => {
            document.getElementById('message').innerText = 'Error saving data: ' + error.message;
        });
});