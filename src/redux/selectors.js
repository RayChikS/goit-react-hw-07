import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilters = state => state.filters;

export const selectError = state => state.contacts.error;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectfilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    contacts.filter(contact => {
      return contact.text.toLowerCase().includes(filters.toLowerCase());
    });
  }
);
