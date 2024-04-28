export const COLUMN_PROPS = {
  flex: 0.2,
  headerAlign: 'center',
  align: 'center',
};

export const createColumn = (field, headerName) => ({
  ...COLUMN_PROPS,
  field,
  headerName,
});

