import { create } from 'zustand';

export interface Candidate {
    id: number;
    name: string;
    email: string;
    [key: string]: any; // For other fields
}

interface CandidateStore {
    candidates: Candidate[];
    filteredCandidates: Candidate[];
    currentPage: number;
    totalPages: number;
    perPage: number;
    filters: Partial<Candidate>;
    fetchCandidates: () => Promise<void>;
    setFilters: (filters: Partial<Candidate>) => void;
    setPage: (page: number) => void;
    applyFilter: () => void;
    resetFilter: () => void;
}

export const useCandidateStore = create<CandidateStore>((set, get) => ({
    candidates: [],
    filteredCandidates: [],
    currentPage: 1,
    totalPages: 1,
    perPage: 5,
    filters: {},

    fetchCandidates: async () => {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/candidates');
            const data = await res.json();
            set({
                candidates: data.candidates,
                filteredCandidates: data.candidates,
                totalPages: Math.ceil(data.candidates.length / get().perPage),
                currentPage: 1,
            });
        } catch (error) {
            console.error('Failed to fetch candidates:', error);
        }
    },

    setFilters: (filters) => {
        set({ filters });
        get().applyFilter();
    },

    setPage: (page) => {
        const totalPages = get().totalPages;
        if (page < 1 || page > totalPages) return;
        set({ currentPage: page });
    },

    applyFilter: () => {
        const { candidates, filters, perPage } = get();
        const filtered = candidates.filter((candidate) =>
            Object.entries(filters).every(([key, value]) =>
                String(candidate[key])
                    .toLowerCase()
                    .includes(String(value).toLowerCase())
            )
        );
        set({
            filteredCandidates: filtered,
            totalPages: Math.ceil(filtered.length / perPage),
            currentPage: 1,
        });
    },
    resetFilter: () => {
        const { candidates, perPage } = get();
        set({
            filteredCandidates: candidates,
            totalPages: Math.ceil(candidates.length / perPage),
            currentPage: 1,
            filters: {},
        });
    },
}));
