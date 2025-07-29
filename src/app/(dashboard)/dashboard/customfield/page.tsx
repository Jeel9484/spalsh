"use client";
import Button from "@/components/ui/button";
import { Add, Trash, Edit } from "iconsax-reactjs";
import { fieldData, FieldRow } from "@/data/fielddata";
import { useState } from "react";

interface EditFieldModalProps {
  field: FieldRow | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (field: FieldRow) => void;
}

const EditFieldModal: React.FC<EditFieldModalProps> = ({
  field,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState({
    title: field?.title || "",
    name: field?.name || "",
    type: field?.type || "Text Input",
    defaultValue: field?.defaultValue || "",
    previewInput: "Yes",
  });

  const fieldTypes = [
    "Text Input",
    "Radio Input",
    "Range Input",
    "Date Input",
    "Checkbox",
  ];

  const handleSave = () => {
    onSave({
      title: formData.title,
      name: formData.name,
      type: formData.type,
      defaultValue: formData.defaultValue,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Edit field</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3 py-2 border-b border-gray-300 focus:border-gray-500 focus:outline-none"
              placeholder="Will call back"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type
            </label>
            <select
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              className="w-full px-3 py-2 border-b border-gray-300 focus:border-gray-500 focus:outline-none bg-white"
            >
              {fieldTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default Value
            </label>
            <input
              type="text"
              value={formData.defaultValue}
              onChange={(e) =>
                setFormData({ ...formData, defaultValue: e.target.value })
              }
              className="w-full px-3 py-2 border-b border-gray-300 focus:border-gray-500 focus:outline-none"
              placeholder="Checked"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Preview of input
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="previewInput"
                  value="Yes"
                  checked={formData.previewInput === "Yes"}
                  onChange={(e) =>
                    setFormData({ ...formData, previewInput: e.target.value })
                  }
                  className="mr-2 text-green-500"
                />
                <span className="text-sm">Yes</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="previewInput"
                  value="No"
                  checked={formData.previewInput === "No"}
                  onChange={(e) =>
                    setFormData({ ...formData, previewInput: e.target.value })
                  }
                  className="mr-2"
                />
                <span className="text-sm">No</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={handleSave}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default function CustomFields() {
  const [fields, setFields] = useState(fieldData);
  const [editingField, setEditingField] = useState<FieldRow | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (field: FieldRow) => {
    setEditingField(field);
    setIsModalOpen(true);
  };

  const handleSave = (updatedField: FieldRow) => {
    setFields(
      fields.map((field) =>
        field.name === editingField?.name ? updatedField : field
      )
    );
  };

  const handleDelete = (fieldToDelete: FieldRow) => {
    setFields(fields.filter((field) => field.name !== fieldToDelete.name));
  };

  return (
    <>
      <section className="border-b border-gray-200 py-6 mb-9">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-medium">Fields</h1>
          <div className="inline-flex items-center">
            <Button variant="primary" size="xs">
              <Add />
              Create a New Tag
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-14">
          <h2 className="text-3xl text-gray">Field</h2>
        </div>
        <div className="text-base text-light-gray flex justify-between border-b border-gray-200 py-6 mb-6">
          <h3>Name</h3>
          <h3>Type</h3>
          <h3>Default Value</h3>
          <h3>Action</h3>
        </div>
        {fields.map((field) => (
          <div
            key={field.name}
            className="flex justify-between text-base border-b border-gray-200 py-6 mb-6"
          >
            <span>{field.name}</span>
            <span>{field.type}</span>
            <span>{field.defaultValue}</span>
            <div className="inline-flex gap-3 items-center cursor-pointer">
              <Trash
                size={19}
                className="text-red-600 hover:text-red-800"
                onClick={() => handleDelete(field)}
              />
              <Edit
                size={19}
                className="text-light-gray hover:text-gray-800"
                onClick={() => handleEdit(field)}
              />
            </div>
          </div>
        ))}
      </section>

      <EditFieldModal
        field={editingField}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingField(null);
        }}
        onSave={handleSave}
      />
    </>
  );
}
