const List = (props) => {
  const { tech } = props;
  return (
	  // listStyle을 통해 제거할 수 있습니다.
    <li style={{listStyle: 'none'}}>
      {tech}
    </li>
  )
}

export default List
