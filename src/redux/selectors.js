export const onFilteredContacts = ({ items, filter }) => {
  const normalizedFilter = filter.toLowerCase().trim();
  return items.filter((contact) =>
    contact.name.toLowerCase().trim().includes(normalizedFilter)
  );
};
