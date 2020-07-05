import { AbpValidators } from '@abp/ng.core';
export function getValidatorsFromProperty(property) {
    const validators = [];
    property.attributes.forEach(attr => {
        if (attr.typeSimple in AbpValidators)
            validators.push(AbpValidators[attr.typeSimple](attr.config));
    });
    return validators;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUtc2hhcmVkL2V4dGVuc2lvbnMvc3JjL2xpYi91dGlscy92YWxpZGF0aW9uLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUk3QyxNQUFNLFVBQVUseUJBQXlCLENBQUMsUUFBbUM7SUFDM0UsTUFBTSxVQUFVLEdBQWtCLEVBQUUsQ0FBQztJQUVyQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNqQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksYUFBYTtZQUNsQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJwVmFsaWRhdG9ycyB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRvckZuIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYmplY3RFeHRlbnNpb25zIH0gZnJvbSAnLi4vbW9kZWxzL29iamVjdC1leHRlbnNpb25zJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZGF0b3JzRnJvbVByb3BlcnR5KHByb3BlcnR5OiBPYmplY3RFeHRlbnNpb25zLlByb3BlcnR5KTogVmFsaWRhdG9yRm5bXSB7XHJcbiAgY29uc3QgdmFsaWRhdG9yczogVmFsaWRhdG9yRm5bXSA9IFtdO1xyXG5cclxuICBwcm9wZXJ0eS5hdHRyaWJ1dGVzLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICBpZiAoYXR0ci50eXBlU2ltcGxlIGluIEFicFZhbGlkYXRvcnMpXHJcbiAgICAgIHZhbGlkYXRvcnMucHVzaChBYnBWYWxpZGF0b3JzW2F0dHIudHlwZVNpbXBsZV0oYXR0ci5jb25maWcpKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHZhbGlkYXRvcnM7XHJcbn1cclxuIl19