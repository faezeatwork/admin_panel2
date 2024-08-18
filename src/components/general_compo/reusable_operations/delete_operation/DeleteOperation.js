import Swal from "sweetalert2";

export const handleDeleteOperation = async (
  id,
  data,
  setData,
  deleteService //بره از کجای دیتابیس برداره پاک کنه
) => {
  await Swal.fire({
    title: "مطمئن هستید؟",
    text: "آیتم مورد نظر ، پس از حذف بازگردانی نمیشود!",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "انصراف",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "حذف",
  }).then((result) => {
    console.log(result);
    if (result.isConfirmed) {
      deleteService(id).then((res) => {
        console.log(res);
        const updateData = data.filter((d) => d.id != id);
        setData(updateData);
        Swal.fire("حذف شد!", `آیتم مورد نظر حذف شد`, "success");
      });
      // Swal.fire(
      //   "حذف شد!",
      //   `آیتم مورد نظر حذف شد`,
      //   "success"
      // );
    }
  });
};
//=============== 👆👆👆 عملیات حذف 👆👆👆 ===============
