import SelectList from 'react-native-dropdown-select-list'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const DropDown = () => {

  const [selected, setSelected] = React.useState("");
  
  const data = [
    {key:'1',value:'Jammu & Kashmir'},
    {key:'2',value:'Gujrat'},
    {key:'3',value:'Maharashtra'},
    {key:'4',value:'Goa'},
  ];

  return(
    <SelectList 
      onSelect={() => alert(selected)}
      setSelected={setSelected} 
      data={data}  
      arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />} 
      searchicon={<FontAwesome name="search" size={12} color={'black'} />} 
      search={false} 
      boxStyles={{borderRadius:0}} //override default styles
      defaultOption={{ key:'1', value:'Jammu & Kashmir' }}   //default selected option
    />
  )

};