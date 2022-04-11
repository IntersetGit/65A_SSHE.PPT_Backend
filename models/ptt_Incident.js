const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ptt_Incident', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      comment: "รหัสตาราง incident ",
      primaryKey: true
    },
    Date_of_Incident: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Time_of_Incident: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Date_of_Report: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Time_of_Report: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Incident_No: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Type_Fatality: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Type of Incident(Fatality)\nไม่เลือกเป็น 0 เลือกเป็น 1\n "
    },
    Type_LostWorkday: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Type of Incident(Lost Workday )\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    'Type_MedicalTreatment ': {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Type of Incident(MedicalTreatment )\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    'Type_NearMiss ': {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Type of Incident(NearMiss  )\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Type_PropertyDamage: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Type of Incident(PropertyDamage )\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Type_MotorVehicle: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Type of Incident(Motor Vehicle Incident)\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Type_FireIncidentFirstAid: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Type of Incident(FireIncidentFirstAid)\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Type_Environmental: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Type of Incident(Environmental Incident )\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Type_other: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    type_note: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "เมื่อเลือก type_other จะต้องกรอก note ด้วย"
    },
    Employer_KSS: {
      type: DataTypes.STRING,
      allowNull: true
    },
    'Employer_Subcontractor ': {
      type: DataTypes.STRING,
      allowNull: true
    },
    incident_01: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Details of Injury\/Illness \ntype of incident (Fatality)\nไม่เลือก 0 เลือก 1"
    },
    incident_02: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Details of Injury\/Illness \ntype of incident (Medical Treatment)\nไม่เลือก 0 เลือก 1"
    },
    incident_03: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Details of Injury\/Illness \ntype of incident (First Aid)\nไม่เลือก 0 เลือก 1"
    },
    incident_04: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Details of Injury\/Illness \ntype of incident (Lost Time)\nไม่เลือก 0 เลือก 1"
    },
    incident_05: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Details of Injury\/Illness \ntype of incident (Restricted Work)\nไม่เลือก 0 เลือก 1 "
    },
    Employment_year: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ระยะเวลาการทำงาน (ปี)"
    },
    Employment_months: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "ระยะเวลาการทำงาน (เดือน)"
    },
    Employers_age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "อายุของพนักงาน"
    },
    Employers_name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "ชื่อของพนักงานที่ได้รับบาดเจ็บ"
    },
    Employers_Nationality: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "สัญชาติของพนักงานที่ได้รับบาดเจ็บ"
    },
    'Employers_Passport ': {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "เลข Personal ID\/Passport ของพนีกงานที่ได้รับบาดเจ็บ"
    },
    Employers_Address: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "ที่อยู๋ของพนักงานที่ได้รับบาดเจ็บ"
    },
    Witness_name: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
      comment: "ชื่อของพยาน( อาจมีได้มากกว่า 1 คน )"
    },
    Witness_Company: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true
    },
    Witness_Position: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
      comment: "ตำแหน่งงานของพยาน"
    },
    Question1: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "คำถามที่ 1 Witness statement attached?\nเลือก No เป็น 0 เลือก Yes เป็น 1"
    },
    Property_Damage_1: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "รายการทรัพย์สิน\/ความเสีย\nคำถาม List of Property\/Materials Damage (use control number if available) "
    },
    Property_Damage_2: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "รายการทรัพย์สิน\/ความเสีย\nคำถาม Nature of Damage"
    },
    Property_Damage_3: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "รายการทรัพย์สิน\/ความเสีย\nคำถาม Object\/substance inflicting damage"
    },
    Property_Damage_4: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "รายการทรัพย์สิน\/ความเสีย\nคำถาม Damage cost (approximately)"
    },
    'Incident_Description ': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "คำอธิบายเหตุการณ์"
    },
    Choice_01: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nInadequate guard\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice_02: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nUnguarded hazard\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice_03: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nSafety device is defective\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice_04: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nTool or equipment defective\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice_05: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nWorkstation layout is hazardous\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice_06: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nUnsafe lighting\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice_07: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nUnsafe ventilation\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice_08: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nLack of needed personal protective equipment\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice_09: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nLack of appropriate equipment \/ tools\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice_10: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nUnsafe clothing\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice_11: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nNo training or insufficient training\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice_Other: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nOther\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice_Other_Note: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "รายละเอียดที่ต้องระบุถ้าเลือก other"
    },
    Choice2_01: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nOperating without permission\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice2_02: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nOperating at unsafe speed\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice2_03: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nServicing equipment that has power to it\nไม่เลือกเป็น 0 เลือกเป็น 1\n"
    },
    Choice2_04: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nMaking a safety device inoperative\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice2_05: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nUsing defective equipment\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice2_06: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nUsing equipment in an unapproved way\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice2_07: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nUnsafe lifting\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice2_08: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nTaking an unsafe position or posture\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice2_09: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nDistraction, teasing, horseplay\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice2_10: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nFailure to wear personal protective equipment\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice2_11: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nFailure to use the available equipment \/ tools\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice2_Other: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ Why did the incident happen?\n\nother\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice2_Other_Note: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "รายละเอียดที่ต้องระบุถ้าเลือก other"
    },
    Question2: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "คำถาม Why did the unsafe conditions exist?"
    },
    Question3: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "คำถาม Why did the unsafe acts occur?"
    },
    Question4: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "คำถาม Were the unsafe acts or conditions reported prior to the incident?\nเลือก No เป็น 0 เลือก Yes เป็น 1"
    },
    Question5: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "คำถาม Have there been similar incidents or near misses prior to this one?\nเลือก No เป็น 0 เลือก Yes เป็น 1"
    },
    Choice3_01: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ How can future incidents be prevented?\n\nStop this activity\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice3_02: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ How can future incidents be prevented?\n\nGuard the hazard\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice3_03: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ How can future incidents be prevented?\n\nTrain the employee(s)   \nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice3_04: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ How can future incidents be prevented?\n\nTrain the supervisor(s)\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice3_05: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ How can future incidents be prevented?\n\nRedesign task steps  \nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice3_06: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ How can future incidents be prevented?\n\nRedesign work station  \nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice3_07: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ How can future incidents be prevented?\n\nWrite a new policy\/rule    \nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice3_08: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ How can future incidents be prevented?\n\nEnforce existing policy \nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice3_09: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ How can future incidents be prevented?\n\nRoutinely inspect for the hazard\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice3_10: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ How can future incidents be prevented?\n\nPersonal Protective Equipment  \nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice3_Other: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "หัวข้อ How can future incidents be prevented?\n\nOther\nไม่เลือกเป็น 0 เลือกเป็น 1"
    },
    Choice3_Other_Note: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "ระบุรายเอียดข้อมูลถ้าเลือก Other"
    },
    Question6: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "คำถาม What should be (or has been) done to carry out the suggestion(s) checked above? \n\nDescription continued on attached sheets\nถ้ามีคำอธิบายในเอกสารด้วยYes เป็น 1 ไม่มีNoเป็น 0"
    },
    'List_ prevent ': {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
      comment: "List action(s) that have or will be taken to prevent a recurrence.\n(แสดงรายการการดำเนินการที่มีหรือจะดำเนินการเพื่อป้องกันการเกิดขึ้นอีก)"
    },
    'Assigned ': {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
      comment: "Assigned To Whom\n(มอบหมายให้ใคร)"
    },
    Schedul_Date: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
      comment: "Scheduled Completion Date\n(กำหนดวันที่เสร็จสมบูรณ์)"
    },
    'Actual _Date': {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
      comment: "Actual Completion Date\n(วันที่เสร็จสมบูรณ์จริง)"
    },
    'Follow-up_Date': {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: true,
      comment: "Follow-up Date\n(วันที่ติดตามผล)"
    },
    Investigation_Team: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "ชื่อทีมสืบสวนและเตรียมความพร้อมเอกสาร"
    },
    Investigation_Position: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "ตำแหน่งงานคนสืบสวน"
    },
    Investigation_Department: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "แผนกคนสืบสวน"
    },
    Investigation_Name: {
      type: DataTypes.JSON,
      allowNull: true,
      comment: "รายชื่อคนในทีมสืบสวน"
    },
    Choice_SSHE_manager: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "SHE Manager\nเลือก 0 เป็น disagree เลือก 1 เป็น agree เลือก 2 เป็น Comments "
    },
    'SHE_Manager_name	': {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "ชื่อของ SHE Manager\t"
    },
    Choice_Constction: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      comment: "Construction Manager\nเลือก 0 เป็น disagree เลือก 1 เป็น agree เลือก 2 เป็น Comments "
    },
    SHE_Manager_Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Constction_Name: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "ชื่อ Constction manager"
    },
    Constction_Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Project_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    company_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    create_by: {
      type: DataTypes.UUID,
      allowNull: true
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_by: {
      type: DataTypes.UUID,
      allowNull: true
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ptt_Incident',
    schema: 'ptt_data',
    timestamps: false,
    indexes: [
      {
        name: "ptt_Incident_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
