"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import Nav from "../../components/Nav";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  contact: z.string().min(7, "Contact must be at least 7 characters"),
  email_id: z.string().email("Invalid email"),
  image: z.any().refine((files) => files?.length === 1, "Image is required"),
});

type FormData = z.infer<typeof schema>;

export default function AddSchool() {
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);

    try {
      const form = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "image") form.append("image", (value as FileList)[0]);
        else form.append(key, value as string);
      });

      const res = await fetch("/api/schools", { method: "POST", body: form });
      const json = await res.json();

      if (!res.ok) throw new Error(json.error || "Failed to save school");

      toast.success("School added successfully!");
      reset();
    } catch (err: any) {
      toast.error("Error: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <Nav/>
    <main className="max-w-lg mx-auto p-6 mt-8">
      <Toaster position="top-right" />
      
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Add School</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="form-group">
            <input 
              className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
              placeholder="School Name" 
              {...register("name")} 
            />
            {errors.name && <p className="text-red-500 text-sm mt-1 ml-1">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <input 
              className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
              placeholder="Address" 
              {...register("address")} 
            />
            {errors.address && <p className="text-red-500 text-sm mt-1 ml-1">{errors.address.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="form-group">
              <input 
                className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                placeholder="City" 
                {...register("city")} 
              />
              {errors.city && <p className="text-red-500 text-sm mt-1 ml-1">{errors.city.message}</p>}
            </div>

            <div className="form-group">
              <input 
                className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                placeholder="State" 
                {...register("state")} 
              />
              {errors.state && <p className="text-red-500 text-sm mt-1 ml-1">{errors.state.message}</p>}
            </div>
          </div>

          <div className="form-group">
            <input 
              className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
              placeholder="Contact Number" 
              {...register("contact")} 
            />
            {errors.contact && <p className="text-red-500 text-sm mt-1 ml-1">{errors.contact.message}</p>}
          </div>

          <div className="form-group">
            <input 
              className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
              type="email" 
              placeholder="Email ID" 
              {...register("email_id")} 
            />
            {errors.email_id && <p className="text-red-500 text-sm mt-1 ml-1">{errors.email_id.message}</p>}
          </div>

          <div className="form-group">
            <label className="block text-gray-600 mb-2">School Image</label>
            <input 
              className="w-full text-gray-700 border border-gray-300 rounded-lg p-2 bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
              type="file" 
              accept="image/*" 
              {...register("image")} 
            />
            {errors.image && <p className="text-red-500 text-sm mt-1 ml-1">{String(errors.image.message)}</p>}
          </div>

          <button 
            type="submit" 
            disabled={submitting} 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-md mt-4 disabled:opacity-70"
          >
            {submitting ? "Saving..." : "Add School"}
          </button>
        </form>
    
    </main>
    </>
  );
}
