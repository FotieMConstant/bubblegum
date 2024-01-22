<template>
  <div>
    <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
      <!-- header section -->
      <PageHeadersComponent
        title="Cover letter"
        description="Get help with a cover letter tailored to the job description and your resume."
      />
      <!-- end of header section -->
      <!-- main section -->
      <div class="py-10 lg:py-10 flex justify-between space-x-5">
        <!-- Card -->
        <div
          class="bg-white w-full rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900"
        >
          <div class="text-left mb-8">
            <h2
              class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200"
            >
              Job description
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Enter the job posting title and description below...
            </p>
          </div>

          <form>
            <!-- Section -->
            <div
              class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent"
            >
              <div class="mt-1 space-y-3">
                <input
                  v-model="jobTitle"
                  type="text"
                  class="py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="e.g.Front-end Developer / Web Developer..."
                />
              </div>
              <div class="mt-4 space-y-3">
                <textarea
                  v-model="jobBody"
                  rows="10"
                  type="text"
                  class="py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="e.g. We are looking for..."
                />
              </div>
            </div>
            <!-- End Section -->
          </form>

          <div class="mt-5 flex justify-end gap-x-2">
            <Button @click="generateCoverLetter" type="primary">{{
              loading ? "Working..." : "Generate Cover"
            }}</Button>
          </div>
        </div>
        <!-- End Card -->
        <!-- Card -->
        <div
          class="bg-white w-full rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900 h-full"
        >
          <div class="text-left mb-8">
            <h2
              class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200"
            >
              Add your resume
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Add your resume for a more teloiored cover letter...(upload coming
              soon)
            </p>
          </div>

          <form>
            <!-- Section -->
            <div
              class="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700 dark:first:border-transparent"
            >
              <div class="mt-4 space-y-3">
                <textarea
                  v-model="jobresumeBodyBody"
                  rows="10"
                  type="text"
                  class="py-2 px-3 pe-11 block w-full border border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="e.g. Your resume in text format..."
                />
              </div>
              <!-- <div class="mt-4 space-y-3">
                <div class="space-y-2">
                  <label
                    for="af-submit-app-upload-images"
                    class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Upload your cv
                  </label>

                  <label
                    for="af-submit-app-upload-images"
                    class="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-gray-700"
                  >
                    <input
                      id="af-submit-app-upload-images"
                      name="af-submit-app-upload-images"
                      type="file"
                      class="sr-only"
                    />
                    <svg
                      class="w-10 h-10 mx-auto text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                      ></path>
                      <path
                        d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
                      ></path>
                    </svg>
                    <span
                      class="mt-2 block text-sm text-gray-800 dark:text-gray-200"
                    >
                      Browse your device or
                      <span class="group-hover:text-blue-700 text-blue-600"
                        >drag 'n drop'</span
                      >
                    </span>
                    <span class="mt-1 block text-xs text-gray-500">
                      Maximum file size is 2 MB
                    </span>
                  </label>
                </div>
              </div> -->
            </div>
            <!-- End Section -->
          </form>
        </div>
        <!-- End Card -->
      </div>
      <!-- end of main section -->
      <!-- generated letter -->
      <div v-html="generatedCoverLetter"></div>
      <!-- end of generated letter -->
    </div>
  </div>
</template>

<script>
import PageHeadersComponent from "@/components/PageHeadersComponent";
import Button from "@/components/utilities/Button";
import OpenAI from "openai";

export default {
  name: "ExtractTextFromJobDescriptionURLComponent",
  components: {
    PageHeadersComponent,
    Button,
  },
  data() {
    return {
      jobTitle: "",
      jobBody: "",
      generatedCoverLetter: "",
      sampleCoverLetter: `Dear Sir/Madam,
I am writing to express my strong interest in the Software Developer Internship position at Google, as advertised. With a passion for software development, a deep commitment to academic excellence and open source projects, I am excited to contribute to the innovative environment that Google provides for its interns as well as the opportunity to support diversified projects by learning different technologies.
As a candidate pursuing a Master's degree in software engineering, I am well-prepared to engage with the challenges and opportunities presented by this internship. My academic background has equipped me with a solid foundation in software development principles and the ability to adapt quickly to new technologies. I am a versatile developer with strong sense of curiosity, open to new technologies. In my previous projects I used to work with multiple programming languages, such as JavaScript, PHP and Python. Additionally, I have gained some valuable experience with different technologies e.g. .NET, starting from scratch when I joined one of the projects.
Furthermore, I believe that my achievements and dedication align with the preferred qualifications for this role. For instance, I was one of the 53 globally selected candidates by Meta for the "Facebook Developer Circles Training Program - Web development Training Course (Front-end development)" in 2019. This was a 1-year long Developer Path for Front-end Web Development, affiliated with the Board of Paris, France.
My experience in a variety of commercial and open source projects, such as web application development, make me a strong candidate for your internship. In my previous experiences, I have consistently demonstrated my ability to work effectively as part of a team and apply my knowledge of computer science to solve tangible business and social challenges, mainly for the education, FinTech and travel sectors. I am skilled at teaching and strongly involved in IT knowledge-sharing initiatives, which helped me to develop my interpersonal skills. I am ready to leverage these experiences to make a meaningful contribution during my internship at Google.
What excites me most about the Software Developer Internship at Google is the opportunity to collaborate on complex computer science solutions and to work on projects that have a positive social impact. I am eager to contribute to Google's engineering endeavors and to learn from some of the brightest minds in the industry.
Thank you for considering my application. I am excited about the opportunity to join Google and contribute to its mission of making a global impact through technology. I look forward to the possibility of discussing how my qualifications align with your team's needs in more detail.
Sincerely,
[Add my name here please]
`,
      resumeBody: null,
      loading: false, //loading state
    };
  },
  methods: {
    async generateCoverLetter() {
      try {
        this.loading = true;
        const openaiInstance = new OpenAI({
          apiKey: process.env.VUE_APP_OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
          dangerouslyAllowBrowser: true, // defaults to false
        });

        const completion = await openaiInstance.chat.completions.create({
          messages: [
            {
              role: "user",
              content:
                "Using this cover letter as a quick sample of what you have to do: \n\n" +
                this.sampleCoverLetter +
                "\n\n, Generate a professional cover letter based on the job description and your resume.\n\n" +
                "Job title: " +
                this.jobTitle +
                "\n\n" +
                "Job description: " +
                this.jobBody +
                "\n\n and here is my resume\n\n" +
                this.resumeBody +
                "Format the response in HTML tag elements. It must be HTML formatted.\n\n" +
                "Cover Letter Structure(Do not include this sections in the results, it is just a vlue print i am procing to you to help you generate me better result):\n" +
                "1. Introduction (1 paragraph):\n" +
                "   - Briefly introduce me.\n" +
                "   - Mention the specific position i am applying for.\n" +
                "2. Body (2-3 paragraphs):\n" +
                "   - Highlight my relevant skills and experiences.\n" +
                "   - Explain how my skills match the requirements of the job.\n" +
                "   - Provide specific examples of my achievements and contributions.\n" +
                "   - Show enthusiasm for the company and the position.\n\n" +
                "3. Conclusion (1 paragraph):\n" +
                "   - Summarize my interest in the position.\n" +
                "   - Express my eagerness for an interview.\n" +
                "   - Include my contact information.\n\n",
            },
          ],

          model: "gpt-3.5-turbo",
        });

        this.generatedCoverLetter = completion.choices[0].message.content;
        this.loading = false;
        console.log("generatedCoverLetter: ", this.generatedCoverLetter);
      } catch (error) {
        console.error("Error generating cover letter:", error);
        // Handle error
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>
