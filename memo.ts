const onClick = async () => {
  const res = await fetch('/api/getUser');
  const results = await res.json();
};
