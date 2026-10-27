 
"use client";

import { useState } from "react";
import { Luggage, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const categories = ["Beach", "Mountain", "City", "Adventure", "Cultural"];

const emptyForm = {
  destinationName: "",
  country: "",
  category: "Beach",
  price: "",
  duration: "",
  departureDate: "",
  imageUrl: "",
  description: "",
};

const inputClassName =
  "h-10 rounded-lg border-transparent bg-muted px-3.5 text-sm focus-visible:bg-muted";

export default function AddDestinationPage() {
  const [form, setForm] = useState(emptyForm);

  const update = (key: keyof typeof emptyForm, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/add-destination", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to add travel package.");
      }

              toast.success("Travel Package Created!", {
                        description: `${form.destinationName} package has been added successfully.`,
                        duration: 4000,
              });
      setForm(emptyForm);
    } catch (error) {
      console.error(error);

      toast.error("Unable to Add Travel Package", {
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        duration: 5000,
      });
    }
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="font-heading text-4xl font-normal sm:text-5xl">
        Add New Travel Package
      </h1>

      <Card className="mx-auto mt-8 max-w-2xl gap-5 p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Field>
            <FieldLabel htmlFor="destination-name">
              Destination Name
            </FieldLabel>
            <Input
              id="destination-name"
              required
              placeholder="Bali Paradise"
              value={form.destinationName}
              onChange={(e) => update("destinationName", e.target.value)}
              className={inputClassName}
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="country">Country</FieldLabel>
              <Input
                id="country"
                required
                placeholder="Indonesia"
                value={form.country}
                onChange={(e) => update("country", e.target.value)}
                className={inputClassName}
              />
            </Field>

            <Field>
              <FieldLabel>Category</FieldLabel>
              <Select
                value={form.category}
                onValueChange={(value) => update("category", String(value))}
              >
                <SelectTrigger className="h-10 w-full rounded-lg border-transparent bg-muted px-3.5 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="price">Price (USD)</FieldLabel>
              <Input
                id="price"
                required
                type="number"
                min="0"
                placeholder="e.g., 1299"
                value={form.price}
                onChange={(e) => update("price", e.target.value)}
                className={inputClassName}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="duration">Duration</FieldLabel>
              <Input
                id="duration"
                required
                placeholder="e.g., 7 Days/6 Nights"
                value={form.duration}
                onChange={(e) => update("duration", e.target.value)}
                className={inputClassName}
              />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="departure-date">Departure Date</FieldLabel>
            <Input
              id="departure-date"
              required
              type="date"
              value={form.departureDate}
              onChange={(e) => update("departureDate", e.target.value)}
              className={inputClassName}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="image-url">Image URL</FieldLabel>
            <Input
              id="image-url"
              required
              type="url"
              placeholder="https://example.com/image.jpg"
              value={form.imageUrl}
              onChange={(e) => update("imageUrl", e.target.value)}
              className={inputClassName}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Textarea
              id="description"
              required
              rows={4}
              placeholder="Describe the travel experience..."
              value={form.description}
              onChange={(e) => update("description", e.target.value)}
              className="min-h-28 rounded-lg border-transparent bg-muted px-3.5 py-2.5 text-sm focus-visible:bg-muted"
            />
          </Field>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setForm(emptyForm)}
              className="h-9 gap-2 rounded-md border-red-200 bg-background px-4 text-red-500 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              <Trash data-icon="inline-start" />
              Cancel
            </Button>

            <Button
              type="submit"
              className="h-9 gap-2 rounded-md bg-cyan-500 px-4 text-white hover:bg-cyan-600"
            >
              <Luggage data-icon="inline-start" />
              Add Travel Package
            </Button>
          </div>
        </form>
      </Card>
    </main>
  );
}
 