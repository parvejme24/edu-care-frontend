import apiService from "../api-service/apiService";

export const extendedCollegeApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    // fetch all colleges
    getColleges: builder.query({
      query: () => "colleges",
    }),

    // fetch a single college by id
    getCollegeById: builder.query({
      query: (id) => `colleges/${id}`,
    }),

    // create a new college
    createCollege: builder.mutation({
      query: (newCollege) => ({
        url: "colleges",
        method: "POST",
        body: newCollege,
      }),
    }),

    // update an existing college
    updateCollege: builder.mutation({
      query: ({ id, updatedCollege }) => ({
        url: `colleges/${id}`,
        method: "PUT",
        body: updatedCollege,
      }),
    }),

    // delete a college
    deleteCollege: builder.mutation({
      query: (id) => ({
        url: `colleges/${id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCollegesQuery,
  useGetCollegeByIdQuery,
  useCreateCollegeMutation,
  useUpdateCollegeMutation,
  useDeleteCollegeMutation,
} = extendedCollegeApi;
