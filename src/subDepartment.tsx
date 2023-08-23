import  { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, ListItemIcon } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const SubDepartments = () => {
  const [openDepartment, setOpenDepartment] = useState<string | null>(null);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<string[]>([]);

  const handleToggleDepartment = (department: string) => {
    if (openDepartment === department) {
      setOpenDepartment(null);
    } else {
      setOpenDepartment(department);
    }
  };

  const handleToggleSelectDepartment = (department: string, subDepartments: string[]) => {
    if (selectedDepartments.includes(department)) {
      setSelectedDepartments(selectedDepartments.filter(dep => dep !== department));
      setSelectedSubDepartments(
        selectedSubDepartments.filter(subDep => !subDepartments.includes(subDep))
      );
    } else {
      setSelectedDepartments([...selectedDepartments, department]);
      setSelectedSubDepartments([...selectedSubDepartments, ...subDepartments]);
    }
  };

  const handleToggleSelectSubDepartment = (subDepartment: string) => {
    if (selectedSubDepartments.includes(subDepartment)) {
      setSelectedSubDepartments(
        selectedSubDepartments.filter(subDep => subDep !== subDepartment)
      );
    } else {
      setSelectedSubDepartments([...selectedSubDepartments, subDepartment]);
    }
  };

  const departments = [
    {
      department: 'customer_service',
      sub_departments: ['support', 'customer_success']
    },
    {
      department: 'design',
      sub_departments: ['graphic_design', 'product_design', 'web_design']
    }
  ];

  return (
    <div>
      <h1>Departments and Sub-Departments</h1>
      <List>
        {departments.map(({ department, sub_departments }) => (
          <div key={department}>
            <ListItem button onClick={() => handleToggleDepartment(department)}>
              <ListItemIcon>
                {openDepartment === department ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
              <ListItemText primary={department} />
            </ListItem>
            <Collapse in={openDepartment === department} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {sub_departments.map(subDepartment => (
                  <ListItem
                    key={subDepartment}
                    button
                    onClick={() => handleToggleSelectSubDepartment(subDepartment)}
                  >
                    <ListItemIcon>
                      {selectedSubDepartments.includes(subDepartment) ? '√' : ''}
                    </ListItemIcon>
                    <ListItemText primary={subDepartment} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
            <ListItem
              button
              onClick={() => handleToggleSelectDepartment(department, sub_departments)}
            >
              <ListItemIcon>
                {selectedDepartments.includes(department) ? '√' : ''}
              </ListItemIcon>
              <ListItemText primary={`Select ${department}`} />
            </ListItem>
          </div>
        ))}
      </List>
    </div>
  );
};

export default SubDepartments;
