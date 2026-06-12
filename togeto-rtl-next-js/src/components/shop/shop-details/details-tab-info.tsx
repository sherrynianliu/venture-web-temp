const tableData = [
  { id: 1, title: 'Weight', description: '2 lbs' },
  { id: 2, title: 'Dimensions', description: '12 × 16 × 19 in' },
  {
    id: 3,
    title: 'Product',
    description: 'Purchase this product on rag-bone.com',
  },
  { id: 4, title: 'Color', description: 'Gray, Black' },
  { id: 5, title: 'Size', description: 'S, M, L, XL' },
  { id: 6, title: 'Model', description: 'Asian' },
  { id: 7, title: 'Shipping', description: 'Standard shipping: $5,95L' },
  {
    id: 8,
    title: 'Care Info',
    description: 'Machine Wash up to 40ºC/86ºF Gentle Cycle',
  },
  { id: 9, title: 'Brand', description: 'Kazen' },
];

const DetailsTabInfo = () => {
  return (
    <div className="product__details-info table-responsive">
      <table className="table table-striped">
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td className="add-info">{item.title}</td>
              <td className="add-info-list">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DetailsTabInfo;
