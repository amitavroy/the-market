import Pagination from "./pagination.interface";
import Product from "./product.interface";

export default interface ProductsPaginated extends Pagination {
  data: Array<Product>;
}
