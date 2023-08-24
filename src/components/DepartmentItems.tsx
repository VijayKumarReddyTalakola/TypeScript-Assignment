import { useState } from 'react';
import { List, ListItem, Collapse, Checkbox, FormControlLabel } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Department {
  department: string;
  sub_departments: SubDepartment[];
  selected: boolean;
}

interface SubDepartment {
  name: string;
  selected: boolean;
}

const DepartmentList = () => {
  const initialDepartmentData: Department[] = [
    {
      department: 'customer_service',
      sub_departments: [
        { name: 'support', selected: false },
        { name: 'customer_success', selected: false },
      ],
      selected: false,
    },
    {
      department: 'design',
      sub_departments: [
        { name: 'graphic_design', selected: false },
        { name: 'product_design', selected: false },
        { name: 'web_design', selected: false },
      ],
      selected: false,
    },
  ];

  const [departments, setDepartments] = useState<Department[]>(initialDepartmentData);

  const handleToggle = (departmentIndex: number, subDepartmentIndex: number) => () => {
    const updatedDepartments = [...departments];
    const subDep = updatedDepartments[departmentIndex].sub_departments[subDepartmentIndex];
    subDep.selected = !subDep.selected;

    const allSubDepartmentsSelected = updatedDepartments[departmentIndex].sub_departments.every(
      (subDep) => subDep.selected
    );

    updatedDepartments[departmentIndex].selected = allSubDepartmentsSelected;

    setDepartments(updatedDepartments);
  };

  const handleDepartmentToggle = (departmentIndex: number) => () => {
    const updatedDepartments = [...departments];
    const department = updatedDepartments[departmentIndex];

    department.selected = !department.selected;

    department.sub_departments.forEach((subDep) => {
      subDep.selected = department.selected;
    });

    setDepartments(updatedDepartments);
  };

  return (
    <List>
      {departments.map((department, departmentIndex) => (
        <div key={department.department}>
          <ListItem button onClick={handleDepartmentToggle(departmentIndex)}>
            <FormControlLabel
              control={<Checkbox checked={department.selected} />}
              label={department.department}
            />
            {department.selected ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={department.selected} timeout="auto">
            <List component="div" disablePadding>
              {department.sub_departments.map((subDepartment, subDepartmentIndex) => (
                <ListItem
                  key={subDepartment.name}
                  button
                  onClick={handleToggle(departmentIndex, subDepartmentIndex)}
                  sx={{ paddingLeft: 30 }}
                >
                  <FormControlLabel
                    control={<Checkbox checked={subDepartment.selected} />}
                    label={subDepartment.name}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default DepartmentList;
