import { CreateProductDto } from "./dto/create-product.dto";
import { GetPopularProductsDto } from "./dto/get-popular-products.dto";
import { GetProductsDto, ProductPaginator } from "./dto/get-products.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";
import { ProductsService } from "./products.service";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    createProduct(createProductDto: CreateProductDto): any;
    getProducts(query: GetProductsDto): Promise<ProductPaginator>;
    getProductBySlug(slug: string): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto): any;
    remove(id: string): string;
}
export declare class PopularProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(query: GetPopularProductsDto): Promise<Product[]>;
}
