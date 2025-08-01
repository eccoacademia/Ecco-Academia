import { Course } from "@/types/course";
import React, { ReactNode } from "react";
// import { ChevronsRight } from "lucide-react";
// import Link from "next/link";
import { CourseCard } from "./course-card";
import clsx from "clsx";
export interface CoursesSectionProps {
  courses: Course[];
  title?: ReactNode;
  className?: string;
  onSelectCourse: (courseId: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  courses,
  title,
  className,
  onSelectCourse,
}) => {
  return (
    <section
      className={clsx(
        "d-flex flex-col items-center justify-center p-4 w-full  mx-auto lg:pt-18",
        className
      )}
    >
      <div className="flex items-end justify-between w-full mb-4 lg:mb-5">
        <h1 className="font-semibold text-gray-base text-[22px] lg:text-2xl">
          {title}
        </h1>
        {/* <Link
          className="font-semibold text-gray-500 flex items-center me-2 hover:text-gray-700 transition-all duration-200"
          href={"/courses"}
        >
          Ver todos
          <ChevronsRight className="ml-1 mt-[3px]" size={21} />
        </Link> */}
      </div>
      <div className="flex justify-center w-full">
        {courses?.map(
          (course) =>
            course.isMain && (
              <CourseCard
                key={course.id}
                course={course}
                onSelectCourse={onSelectCourse}
              />
            )
        )}
      </div>
    </section>
  );
};
