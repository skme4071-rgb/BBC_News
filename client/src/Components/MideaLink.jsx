import { CustomRoundedButton, CustomLink } from "./utlis/tag";

export default function MideaLink() {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-sm text-gray-400">Follow BBC News:</span>
      <div className="flex space-x-3">

        <CustomLink className="" to="https://www.facebook.com/" >
          <CustomRoundedButton className="bg-blue-600" text="f" />
        </CustomLink>

        <CustomLink className="" to="https://www.facebook.com/" >
          <CustomRoundedButton className="bg-blue-400 hover:bg-blue-500" text="t" />
        </CustomLink>

        <CustomLink className="" to="https://www.youtube.com/" >
          <CustomRoundedButton className="bg-red-700 hover:bg-red-400" text="▶" />
        </CustomLink>

      </div>
    </div>
  );
}
