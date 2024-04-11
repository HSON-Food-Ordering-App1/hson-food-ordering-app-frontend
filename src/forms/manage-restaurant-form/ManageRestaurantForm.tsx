import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  restaurantName: z.string({
    required_error: "tên nhà hàng không được để trống",
  }),
  city: z.string({
    required_error: "tên thành phố không được để trống",
  }),
  country: z.string({
    required_error: "tên quốc gia không được để trống",
  }),
  deliveryPrice: z.coerce.number({
    required_error: "giá giao hàng không được để trống",
    invalid_type_error: "phải là số hợp lệ",
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: "thời gian giao hàng ước tính không được để trống",
    invalid_type_error: "phải là số hợp lệ",
  }),
  cuisines: z.array(z.string()).nonempty({
    message: "vui lòng chọn ít nhất một mục",
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "tên không được để trống"),
      price: z.coerce.number().min(1, "giá không được để trống"),
    })
  ),
  imageFile: z.instanceof(File, {message: "hình ảnh không được để trống"}),
});

type restaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
    const form = useForm<restaurantFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cuisines: [],
            menuItems: [{ name: "", price: 0 }],
        },
    });

    const onSubmit = (formDataJson: restaurantFormData) => {

    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-gray-50 p-10 rounded-lg">
                <DetailsSection/>
                <Separator/>
                <CuisinesSection/>
                <Separator/>
                <MenuSection/>
                <Separator/>
                <ImageSection/>
                {isLoading ? <LoadingButton/> : <Button type="submit">Submit</Button>}
            </form>
        </Form>
    )
};

export default ManageRestaurantForm;
